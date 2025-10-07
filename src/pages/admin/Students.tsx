import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Search, Filter, Users, ChevronRight, CheckSquare, Square } from 'lucide-react';
import PortalHeader from '@/components/PortalHeader';
import { User } from '@supabase/supabase-js';
import { StudentModuleProgress } from '@/components/admin/StudentModuleProgress';
import { BulkProgressUpdate } from '@/components/admin/BulkProgressUpdate';

const MODULE_LABELS: Record<string, string> = {
  permit_prep: 'Permit Prep',
  eldt_theory: 'ELDT Theory',
  pre_trip_inspection: 'Pre-Trip',
  behind_wheel_parking: 'Parking/Yard',
  behind_wheel_road: 'Public Road',
  dmv_scheduled: 'DMV Scheduled',
  dmv_completed: 'DMV Complete'
};

export default function Students() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  
  // Filters and selection
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [moduleFilter, setModuleFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkUpdateOpen, setBulkUpdateOpen] = useState(false);

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

      // Load enrollments with student and class info
      const { data: enrollmentsData } = await supabase
        .from('enrollments')
        .select('*, profiles(*), classes(*)')
        .order('created_at', { ascending: false });

      setEnrollments(enrollmentsData || []);
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

  const filterEnrollments = (programType: string) => {
    let filtered = enrollments.filter(e => e.classes.program_type === programType);
    
    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(e => 
        `${e.profiles.first_name} ${e.profiles.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.profiles.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(e => e.status === statusFilter);
    }
    
    // Apply module filter
    if (moduleFilter !== 'all') {
      filtered = filtered.filter(e => e.current_module === moduleFilter);
    }
    
    return filtered;
  };

  const classAEnrollments = filterEnrollments('class-a');
  const classBEnrollments = filterEnrollments('class-b');

  const toggleSelection = (enrollmentId: string) => {
    const newSelection = new Set(selectedIds);
    if (newSelection.has(enrollmentId)) {
      newSelection.delete(enrollmentId);
    } else {
      newSelection.add(enrollmentId);
    }
    setSelectedIds(newSelection);
  };

  const toggleSelectAll = (enrollmentsList: any[]) => {
    const allIds = enrollmentsList.map(e => e.id);
    const allSelected = allIds.every(id => selectedIds.has(id));
    
    if (allSelected) {
      const newSelection = new Set(selectedIds);
      allIds.forEach(id => newSelection.delete(id));
      setSelectedIds(newSelection);
    } else {
      setSelectedIds(new Set([...selectedIds, ...allIds]));
    }
  };

  const getSelectedEnrollments = () => {
    return enrollments.filter(e => selectedIds.has(e.id));
  };

  const EnrollmentTable = ({ enrollmentsList, programType }: { enrollmentsList: any[], programType: string }) => {
    const allSelected = enrollmentsList.length > 0 && enrollmentsList.every(e => selectedIds.has(e.id));
    const someSelected = enrollmentsList.some(e => selectedIds.has(e.id)) && !allSelected;

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">
              {enrollmentsList.length} {programType === 'class-a' ? 'Class A' : 'Class B'} Students
            </span>
            {selectedIds.size > 0 && (
              <Badge variant="secondary">
                {getSelectedEnrollments().length} selected
              </Badge>
            )}
          </div>
          
          {selectedIds.size > 0 && (
            <Button onClick={() => setBulkUpdateOpen(true)}>
              Update {selectedIds.size} Selected
            </Button>
          )}
        </div>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={() => toggleSelectAll(enrollmentsList)}
                    aria-label="Select all"
                    ref={(el) => {
                      if (el) {
                        (el as any).indeterminate = someSelected;
                      }
                    }}
                  />
                </TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Current Module</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>DMV Attempts</TableHead>
                <TableHead className="w-32">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enrollmentsList.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No students found matching filters
                  </TableCell>
                </TableRow>
              ) : (
                enrollmentsList.map((enrollment) => (
                  <TableRow key={enrollment.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedIds.has(enrollment.id)}
                        onCheckedChange={() => toggleSelection(enrollment.id)}
                        aria-label={`Select ${enrollment.profiles.first_name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">
                          {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                        </p>
                        <p className="text-xs text-muted-foreground">{enrollment.profiles.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {MODULE_LABELS[enrollment.current_module] || 'Not Set'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${enrollment.progress_percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{enrollment.progress_percentage}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={enrollment.status === 'completed' ? 'default' : 'secondary'}>
                        {enrollment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          enrollment.payment_status === 'paid' ? 'default' : 
                          enrollment.payment_status === 'partial' ? 'secondary' : 
                          'destructive'
                        }
                      >
                        {enrollment.payment_status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {enrollment.dmv_test_attempts > 0 ? (
                        <Badge variant="destructive">{enrollment.dmv_test_attempts}</Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <StudentModuleProgress
                        enrollment={enrollment}
                        onUpdate={checkAdminAndLoadData}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    );
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
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Student Progress Management</h1>
          <p className="text-muted-foreground">Track and update student progress by program type</p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Module</label>
                <Select value={moduleFilter} onValueChange={setModuleFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modules</SelectItem>
                    {Object.entries(MODULE_LABELS).map(([value, label]) => (
                      <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Class A and Class B */}
        <Tabs defaultValue="class-a" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="class-a" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Class A CDL ({classAEnrollments.length})
            </TabsTrigger>
            <TabsTrigger value="class-b" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Class B CDL ({classBEnrollments.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="class-a" className="mt-6">
            <EnrollmentTable enrollmentsList={classAEnrollments} programType="class-a" />
          </TabsContent>
          
          <TabsContent value="class-b" className="mt-6">
            <EnrollmentTable enrollmentsList={classBEnrollments} programType="class-b" />
          </TabsContent>
        </Tabs>
      </main>

      {/* Bulk Update Dialog */}
      <BulkProgressUpdate
        selectedEnrollments={getSelectedEnrollments()}
        open={bulkUpdateOpen}
        onOpenChange={setBulkUpdateOpen}
        onUpdate={() => {
          checkAdminAndLoadData();
          setSelectedIds(new Set());
        }}
      />
    </div>
  );
}
