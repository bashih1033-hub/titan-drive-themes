-- Add missing foreign key relationships to fix dashboard data loading

-- Add foreign key for enrollments.class_id -> classes.id
ALTER TABLE public.enrollments
DROP CONSTRAINT IF EXISTS enrollments_class_id_fkey;

ALTER TABLE public.enrollments
ADD CONSTRAINT enrollments_class_id_fkey
FOREIGN KEY (class_id)
REFERENCES public.classes(id)
ON DELETE CASCADE;

-- Add foreign key for enrollments.student_id -> profiles.id
ALTER TABLE public.enrollments
DROP CONSTRAINT IF EXISTS enrollments_student_id_fkey;

ALTER TABLE public.enrollments
ADD CONSTRAINT enrollments_student_id_fkey
FOREIGN KEY (student_id)
REFERENCES public.profiles(id)
ON DELETE CASCADE;

-- Add index for better query performance
CREATE INDEX IF NOT EXISTS idx_enrollments_student_id ON public.enrollments(student_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_class_id ON public.enrollments(class_id);