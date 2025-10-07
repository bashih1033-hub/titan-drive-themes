-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'student', 'lead');

-- Create user roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  date_of_birth DATE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  program_interest TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'enrolled', 'lost')),
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  assigned_to UUID REFERENCES auth.users(id)
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage leads"
  ON public.leads FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create classes table
CREATE TABLE public.classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_type TEXT NOT NULL CHECK (program_type IN ('class-a', 'class-b', 'refresher', 'endorsements')),
  start_date DATE NOT NULL,
  end_date DATE,
  capacity INTEGER DEFAULT 12,
  enrolled_count INTEGER DEFAULT 0,
  price DECIMAL(10, 2) NOT NULL,
  location TEXT DEFAULT 'Minneapolis/St. Paul',
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in-progress', 'completed', 'cancelled')),
  instructor_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view scheduled classes"
  ON public.classes FOR SELECT
  USING (status = 'scheduled' OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage classes"
  ON public.classes FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE NOT NULL,
  enrollment_date TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in-progress', 'completed', 'cancelled')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'paid', 'refunded')),
  amount_paid DECIMAL(10, 2) DEFAULT 0,
  stripe_payment_intent_id TEXT,
  completion_date DATE,
  certificate_url TEXT,
  progress_percentage INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (student_id, class_id)
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own enrollments"
  ON public.enrollments FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Admins can manage enrollments"
  ON public.enrollments FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  program_type TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approved_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved reviews"
  ON public.reviews FOR SELECT
  USING (status = 'approved');

CREATE POLICY "Students can create reviews"
  ON public.reviews FOR INSERT
  WITH CHECK (auth.uid() = student_id AND public.has_role(auth.uid(), 'student'));

CREATE POLICY "Admins can manage reviews"
  ON public.reviews FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create documents table
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  document_type TEXT NOT NULL CHECK (document_type IN ('drivers-license', 'medical-certificate', 'certificate', 'transcript', 'other')),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  uploaded_by UUID REFERENCES auth.users(id),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own documents"
  ON public.documents FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Admins can manage documents"
  ON public.documents FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create email_logs table
CREATE TABLE public.email_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email TEXT NOT NULL,
  recipient_id UUID REFERENCES auth.users(id),
  email_type TEXT NOT NULL,
  subject TEXT NOT NULL,
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'failed', 'bounced')),
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  error_message TEXT
);

ALTER TABLE public.email_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view email logs"
  ON public.email_logs FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Create analytics_events table
CREATE TABLE public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type TEXT NOT NULL,
  event_data JSONB,
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT,
  page_url TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view analytics"
  ON public.analytics_events FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create profile
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  
  -- Assign default student role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student');
  
  RETURN NEW;
END;
$$;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Add update triggers
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_classes_updated_at
  BEFORE UPDATE ON public.classes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at
  BEFORE UPDATE ON public.enrollments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to automatically generate Monday start dates
CREATE OR REPLACE FUNCTION public.generate_class_schedule()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  next_monday DATE;
  class_count INTEGER;
BEGIN
  -- Get next Monday
  next_monday := CURRENT_DATE + ((1 - EXTRACT(DOW FROM CURRENT_DATE)::INTEGER + 7) % 7);
  
  -- Generate 12 weeks of Monday classes for each program type
  FOR class_count IN 0..11 LOOP
    -- Class A CDL
    INSERT INTO public.classes (program_type, start_date, end_date, price, capacity)
    VALUES (
      'class-a',
      next_monday + (class_count * 7),
      next_monday + (class_count * 7) + 21,
      4500.00,
      12
    ) ON CONFLICT DO NOTHING;
    
    -- Class B CDL
    INSERT INTO public.classes (program_type, start_date, end_date, price, capacity)
    VALUES (
      'class-b',
      next_monday + (class_count * 7),
      next_monday + (class_count * 7) + 14,
      3500.00,
      10
    ) ON CONFLICT DO NOTHING;
  END LOOP;
END;
$$;

-- Generate initial class schedule
SELECT public.generate_class_schedule();