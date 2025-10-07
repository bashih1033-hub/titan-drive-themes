-- Add admin role to the first user (bashih1033@gmail.com)
INSERT INTO public.user_roles (user_id, role)
VALUES ('64932b05-95b5-4afd-8f0e-24da8137644f', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;