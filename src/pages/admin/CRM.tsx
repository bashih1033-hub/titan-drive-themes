import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import { LeadCRM } from '@/components/admin/LeadCRM';
import { User } from '@supabase/supabase-js';

export default function CRM() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
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

      // Load leads and students
      const [leadsData, studentsData] = await Promise.all([
        supabase.from('leads').select('*').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      ]);

      setLeads(leadsData.data || []);
      setStudents(studentsData.data || []);
    } catch (error: any) {
      console.error('Error loading CRM data:', error);
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
        userRole="admin"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">CRM - Lead Pipeline</h1>
          <p className="text-muted-foreground">Drag and drop leads between stages to manage your sales pipeline</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lead Management</CardTitle>
            <CardDescription>Track leads from initial contact to enrollment</CardDescription>
          </CardHeader>
          <CardContent>
            <LeadCRM 
              leads={leads} 
              onLeadsUpdate={checkAdminAndLoadData}
              students={students}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}