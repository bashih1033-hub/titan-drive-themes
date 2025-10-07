-- Fix security warnings

-- Add RLS policy for user_roles table
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Fix search_path for generate_class_schedule function
CREATE OR REPLACE FUNCTION public.generate_class_schedule()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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