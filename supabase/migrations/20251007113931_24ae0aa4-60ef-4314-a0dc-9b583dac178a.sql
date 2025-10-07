-- Add notes column to leads table for CRM functionality
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add converted_to_student_id column to track when a lead becomes a student
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS converted_to_student_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

-- Add last_contact_date for tracking
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS last_contact_date TIMESTAMP WITH TIME ZONE;

-- Update lead status to have more stages
-- The status column already exists, we just need to ensure it supports our CRM stages:
-- 'new', 'contacted', 'qualified', 'negotiation', 'enrolled', 'lost'

-- Add index for better performance on status queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_converted_to_student ON public.leads(converted_to_student_id);