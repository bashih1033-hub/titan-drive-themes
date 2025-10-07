import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Users, GraduationCap, MessageSquare, Calendar, TrendingUp, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import { User } from '@supabase/supabase-js';
import { DashboardReminders } from '@/components/admin/DashboardReminders';
import { StatsCard } from '@/components/admin/StatsCard';

export default function Admin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
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

      // Load all admin data
      const [leadsData, studentsData, classesData, enrollmentsData, reviewsData] = await Promise.all([
        supabase.from('leads').select('*').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('classes').select('*').order('start_date', { ascending: true }),
        supabase.from('enrollments').select('*, profiles(*), classes(*)').order('created_at', { ascending: false }),
        supabase.from('reviews').select('*, profiles(*)').order('created_at', { ascending: false }),
      ]);

      setLeads(leadsData.data || []);
      setStudents(studentsData.data || []);
      setClasses(classesData.data || []);
      setEnrollments(enrollmentsData.data || []);
      setReviews(reviewsData.data || []);
    } catch (error: any) {
      console.error('Error loading admin data:', error);
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApproveReview = async (reviewId: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { error } = await supabase
        .from('reviews')
        .update({ 
          status: 'approved',
          approved_by: session?.user.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', reviewId);

      if (error) throw error;

      toast({
        title: 'Review approved',
        description: 'The review has been published',
      });

      checkAdminAndLoadData();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const newLeads = leads.filter(l => l.status === 'new');
  const activeEnrollments = enrollments.filter(e => e.status === 'in-progress');
  const scheduledClasses = classes.filter(c => c.status === 'scheduled');
  const pendingReviews = reviews.filter(r => r.status === 'pending');

  const completedEnrollments = enrollments.filter(e => e.status === 'completed');
  const conversionRate = leads.length > 0 
    ? Math.round((students.length / leads.length) * 100) 
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <PortalHeader 
        userRole="admin"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6 md:space-y-8">
        {/* Hero Section */}
        <div className="space-y-1 sm:space-y-2 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            Welcome back, {profile?.first_name || 'Admin'}! 👋
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Here's what's happening with your trucking school today
          </p>
        </div>

        {/* Dashboard Reminders */}
        <DashboardReminders enrollments={enrollments} />

        {/* Summary Cards - Responsive Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <StatsCard
            title="Total Leads"
            value={leads.length}
            subtitle={`${newLeads.length} new this week`}
            icon={Users}
            gradient="primary"
            onClick={() => navigate('/admin/crm')}
          />
          
          <StatsCard
            title="Active Students"
            value={students.length}
            subtitle={`${activeEnrollments.length} in progress`}
            icon={GraduationCap}
            gradient="accent"
            onClick={() => navigate('/admin/students')}
            trend={{ value: 12, isPositive: true }}
          />
          
          <StatsCard
            title="Classes"
            value={classes.length}
            subtitle={`${scheduledClasses.length} scheduled`}
            icon={Calendar}
            gradient="secondary"
            onClick={() => navigate('/admin/classes')}
          />
          
          <StatsCard
            title="Completion Rate"
            value={`${completedEnrollments.length}/${enrollments.length}`}
            subtitle={`${conversionRate}% conversion`}
            icon={CheckCircle2}
            gradient="success"
          />
        </div>

        {/* Main Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <Card className="lg:col-span-1 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Common tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                className="w-full justify-start group hover:bg-primary hover:text-primary-foreground transition-all text-sm sm:text-base h-9 sm:h-10" 
                variant="outline" 
                asChild
              >
                <Link to="/admin/crm">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 transition-transform group-hover:scale-110" />
                  Manage Leads
                  <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button 
                className="w-full justify-start group hover:bg-primary hover:text-primary-foreground transition-all text-sm sm:text-base h-9 sm:h-10" 
                variant="outline" 
                asChild
              >
                <Link to="/admin/classes">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 transition-transform group-hover:scale-110" />
                  Schedule Classes
                  <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button 
                className="w-full justify-start group hover:bg-primary hover:text-primary-foreground transition-all text-sm sm:text-base h-9 sm:h-10" 
                variant="outline" 
                asChild
              >
                <Link to="/admin/students">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 transition-transform group-hover:scale-110" />
                  View Students
                  <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Recent Enrollments
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Latest student activity</CardDescription>
            </CardHeader>
            <CardContent>
              {enrollments.length === 0 ? (
                <div className="text-center py-8 sm:py-12">
                  <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4 opacity-50" />
                  <p className="text-sm sm:text-base text-muted-foreground">No enrollments yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {enrollments.slice(0, 5).map((enrollment, index) => (
                    <div 
                      key={enrollment.id} 
                      className="group flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/60 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
                          <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-xs sm:text-sm truncate">
                            {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                          </p>
                          <p className="text-xs text-muted-foreground capitalize truncate">
                            {enrollment.classes.program_type.replace('-', ' ')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                          enrollment.status === 'completed' 
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                            : enrollment.status === 'in-progress'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {enrollment.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1 hidden sm:block">
                          {new Date(enrollment.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Pending Reviews Section - Mobile Optimized */}
        {pendingReviews.length > 0 && (
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Pending Reviews
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Reviews awaiting your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingReviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className="group border rounded-xl p-3 sm:p-4 hover:shadow-md hover:border-primary/20 transition-all duration-200"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2">
                          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <span className="text-xs sm:text-sm font-semibold text-primary">
                              {review.profiles.first_name[0]}{review.profiles.last_name[0]}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-sm sm:text-base truncate">
                              {review.profiles.first_name} {review.profiles.last_name}
                            </h3>
                            <div className="flex gap-0.5">
                              {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500 text-xs sm:text-sm">★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <h4 className="font-medium mb-1 text-sm sm:text-base">{review.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{review.content}</p>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => handleApproveReview(review.id)}
                        className="shrink-0 hover:scale-105 transition-transform w-full sm:w-auto h-9 text-sm"
                      >
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}