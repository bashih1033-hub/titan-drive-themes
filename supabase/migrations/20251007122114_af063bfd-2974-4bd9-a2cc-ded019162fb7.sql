-- Fix search_path for calculate_module_progress function
CREATE OR REPLACE FUNCTION public.calculate_module_progress(module public.course_module, dmv_status text)
RETURNS integer
LANGUAGE plpgsql
IMMUTABLE
SECURITY DEFINER
SET search_path = public
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