import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import { ClassManagement } from '@/components/admin/ClassManagement';
import { User } from '@supabase/supabase-js';

export default function Classes() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    checkAdminAndLoadData();
  }, []);

  const checkAdminAndLoadData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      setUser(session.user);

      // Check if admin
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);

      const hasAdminRole = roleData?.some(r => r.role === 'admin');

      if (!hasAdminRole) {
        toast({
          title: 'Access Denied',
          description: 'You do not have admin privileges',
          variant: 'destructive',
        });
        navigate('/dashboard');
        return;
      }

      // Fetch profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      setProfile(profileData);

      // Load data
      const [classesData, enrollmentsData, studentsData, leadsData] = await Promise.all([
        supabase.from('classes').select('*').order('start_date', { ascending: true }),
        supabase.from('enrollments').select('*, profiles(*), classes(*)').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('leads').select('*').order('created_at', { ascending: false }),
      ]);

      setClasses(classesData.data || []);
      setEnrollments(enrollmentsData.data || []);
      setStudents(studentsData.data || []);
      setLeads(leadsData.data || []);
    } catch (error: any) {
      console.error('Error loading class data:', error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <PortalHeader 
        userRole="admin"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">Class Management</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Manage class schedules and enroll students</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Classes & Enrollments</CardTitle>
            <CardDescription className="text-xs sm:text-sm">View all classes and enroll students or convert leads</CardDescription>
          </CardHeader>
          <CardContent className="p-0 sm:p-6">
            <ClassManagement
              classes={classes}
              enrollments={enrollments}
              students={students}
              leads={leads}
              onUpdate={checkAdminAndLoadData}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}