import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Calendar, GraduationCap } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import { User } from '@supabase/supabase-js';

export default function Students() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
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

      // Load students and their enrollments
      const [studentsData, enrollmentsData] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('enrollments').select('*, classes(*)').order('created_at', { ascending: false }),
      ]);

      setStudents(studentsData.data || []);
      setEnrollments(enrollmentsData.data || []);
    } catch (error: any) {
      console.error('Error loading student data:', error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getStudentEnrollments = (studentId: string) => {
    return enrollments.filter(e => e.student_id === studentId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <PortalHeader 
        userRole="admin"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Student Directory</h1>
          <p className="text-muted-foreground">View and manage all registered students</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
            <CardDescription>Total: {students.length} students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {students.map((student) => {
                const studentEnrollments = getStudentEnrollments(student.id);
                const activeEnrollments = studentEnrollments.filter(e => 
                  ['pending', 'confirmed', 'in-progress'].includes(e.status)
                );

                return (
                  <Card key={student.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {student.first_name} {student.last_name}
                          </CardTitle>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{student.email}</span>
                          </div>
                        </div>
                        <Badge variant={activeEnrollments.length > 0 ? 'default' : 'secondary'}>
                          {activeEnrollments.length > 0 ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {new Date(student.created_at).toLocaleDateString()}</span>
                      </div>

                      {student.phone && (
                        <div className="text-sm">
                          <span className="text-muted-foreground">Phone: </span>
                          <span className="font-medium">{student.phone}</span>
                        </div>
                      )}

                      {studentEnrollments.length > 0 && (
                        <div className="pt-3 border-t space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <GraduationCap className="h-4 w-4" />
                            <span>Enrollments ({studentEnrollments.length})</span>
                          </div>
                          <div className="space-y-1">
                            {studentEnrollments.slice(0, 3).map((enrollment) => (
                              <div
                                key={enrollment.id}
                                className="text-xs bg-muted/50 rounded p-2 flex items-center justify-between"
                              >
                                <span className="capitalize">
                                  {enrollment.classes.program_type.replace('-', ' ')}
                                </span>
                                <Badge variant="outline" className="text-xs capitalize">
                                  {enrollment.status}
                                </Badge>
                              </div>
                            ))}
                            {studentEnrollments.length > 3 && (
                              <p className="text-xs text-muted-foreground text-center pt-1">
                                +{studentEnrollments.length - 3} more
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}