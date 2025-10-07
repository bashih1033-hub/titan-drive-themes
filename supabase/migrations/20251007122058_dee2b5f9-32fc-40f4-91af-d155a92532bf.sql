-- Create enum for course modules
CREATE TYPE public.course_module AS ENUM (
  'permit_prep',
  'eldt_theory',
  'pre_trip_inspection',
  'behind_wheel_parking',
  'behind_wheel_road',
  'dmv_scheduled',
  'dmv_completed'
);

-- Add module tracking columns to enrollments table
ALTER TABLE public.enrollments
ADD COLUMN current_module public.course_module DEFAULT 'permit_prep',
ADD COLUMN permit_prep_completed_at timestamp with time zone,
ADD COLUMN eldt_theory_completed_at timestamp with time zone,
ADD COLUMN pre_trip_completed_at timestamp with time zone,
ADD COLUMN parking_completed_at timestamp with time zone,
ADD COLUMN road_completed_at timestamp with time zone,
ADD COLUMN dmv_scheduled_at timestamp with time zone,
ADD COLUMN dmv_completed_at timestamp with time zone,
ADD COLUMN dmv_test_attempts integer DEFAULT 0,
ADD COLUMN dmv_test_status text CHECK (dmv_test_status IN ('pending', 'passed', 'failed'));

-- Create function to calculate progress based on current module
CREATE OR REPLACE FUNCTION public.calculate_module_progress(module public.course_module, dmv_status text)
RETURNS integer
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  CASE module
    WHEN 'permit_prep' THEN RETURN 14;
    WHEN 'eldt_theory' THEN RETURN 28;
    WHEN 'pre_trip_inspection' THEN RETURN 42;
    WHEN 'behind_wheel_parking' THEN RETURN 57;
    WHEN 'behind_wheel_road' THEN RETURN 71;
    WHEN 'dmv_scheduled' THEN RETURN 85;
    WHEN 'dmv_completed' THEN 
      IF dmv_status = 'passed' THEN 
        RETURN 100;
      ELSE 
        RETURN 85;
      END IF;
    ELSE RETURN 0;
  END CASE;
END;
$$;

-- Create trigger to auto-update progress_percentage based on current_module
CREATE OR REPLACE FUNCTION public.update_enrollment_progress()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.progress_percentage := calculate_module_progress(NEW.current_module, NEW.dmv_test_status);
  
  -- Auto-update status based on module and DMV result
  IF NEW.current_module = 'dmv_completed' AND NEW.dmv_test_status = 'passed' THEN
    NEW.status := 'completed';
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_enrollment_progress_trigger
BEFORE INSERT OR UPDATE OF current_module, dmv_test_status ON public.enrollments
FOR EACH ROW
EXECUTE FUNCTION public.update_enrollment_progress();