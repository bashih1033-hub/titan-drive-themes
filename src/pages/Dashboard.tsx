import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, GraduationCap, Calendar, FileText, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PortalHeader from '@/components/PortalHeader';

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
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
      
      if (hasAdminRole) {
        setIsAdmin(true);
        navigate('/admin');
        return;
      }

      // Fetch profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      setProfile(profileData);

      // Fetch enrollments
      const { data: enrollmentData } = await supabase
        .from('enrollments')
        .select(`
          *,
          classes:class_id (*)
        `)
        .eq('student_id', session.user.id)
        .order('created_at', { ascending: false });

      setEnrollments(enrollmentData || []);
    } catch (error: any) {
      console.error('Error loading dashboard:', error);
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
    <div className="min-h-screen flex flex-col bg-muted/30">
      <PortalHeader 
        userRole="student"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Welcome back, {profile?.first_name || 'Student'}!
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">Track your progress and manage your enrollments</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Active Enrollments</CardTitle>
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">
                {enrollments.filter(e => ['pending', 'confirmed', 'in-progress'].includes(e.status)).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Completed Classes</CardTitle>
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">
                {enrollments.filter(e => e.status === 'completed').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Documents</CardTitle>
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">0</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Progress</CardTitle>
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">
                {enrollments.length > 0 
                  ? Math.round(enrollments.reduce((acc, e) => acc + (e.progress_percentage || 0), 0) / enrollments.length)
                  : 0}%
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">My Enrollments</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Track your CDL training programs</CardDescription>
          </CardHeader>
          <CardContent>
            {enrollments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm sm:text-base text-muted-foreground mb-4">You haven't enrolled in any programs yet.</p>
                <Button onClick={() => navigate('/programs')} className="text-sm sm:text-base">Browse Programs</Button>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {enrollments.map((enrollment) => (
                  <div key={enrollment.id} className="border rounded-lg p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold capitalize text-sm sm:text-base truncate">{enrollment.classes.program_type.replace('-', ' ')}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Start Date: {new Date(enrollment.classes.start_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xl sm:text-2xl font-bold">{enrollment.progress_percentage}%</div>
                        <p className="text-xs sm:text-sm text-muted-foreground">Complete</p>
                      </div>
                    </div>
                    
                    {/* Current Module Display */}
                    {enrollment.current_module && (
                      <div className="mb-3 p-2 sm:p-3 bg-primary/5 rounded-md border">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Current Module:</p>
                        <p className="text-xs sm:text-sm font-semibold capitalize">
                          {enrollment.current_module.replace(/_/g, ' ').replace('dmv', 'DMV')}
                        </p>
                        {enrollment.dmv_test_attempts > 0 && (
                          <Badge variant="destructive" className="mt-2 text-xs">
                            DMV Test Attempts: {enrollment.dmv_test_attempts}
                          </Badge>
                        )}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant={enrollment.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                          {enrollment.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Payment:</span>
                        <Badge variant={enrollment.payment_status === 'paid' ? 'default' : enrollment.payment_status === 'partial' ? 'secondary' : 'destructive'} className="text-xs">
                          {enrollment.payment_status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}