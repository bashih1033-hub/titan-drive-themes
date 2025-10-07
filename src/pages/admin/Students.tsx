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
          <div className="flex items-center gap-3">
            {selectedIds.size > 0 && (
              <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold">
                {getSelectedEnrollments().length} selected
              </Badge>
            )}
          </div>
          
          {selectedIds.size > 0 && (
            <Button 
              onClick={() => setBulkUpdateOpen(true)}
              className="hover:scale-105 transition-transform shadow-md"
            >
              <CheckSquare className="h-4 w-4 mr-2" />
              Update {selectedIds.size} Selected
            </Button>
          )}
        </div>

        <div className="border rounded-xl overflow-hidden shadow-sm">
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
                  <TableCell colSpan={8} className="text-center py-12">
                    <div className="flex flex-col items-center gap-3">
                      <Users className="h-12 w-12 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">No students found matching filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                enrollmentsList.map((enrollment, index) => (
                  <TableRow 
                    key={enrollment.id}
                    className="hover:bg-muted/30 transition-colors"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
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
                      <Badge variant="outline" className="capitalize font-medium">
                        {MODULE_LABELS[enrollment.current_module] || 'Not Set'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-muted rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${enrollment.progress_percentage}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold min-w-[3rem]">{enrollment.progress_percentage}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={enrollment.status === 'completed' ? 'default' : 'secondary'}
                        className="capitalize font-medium"
                      >
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
                        className="capitalize font-medium"
                      >
                        {enrollment.payment_status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {enrollment.dmv_test_attempts > 0 ? (
                        <Badge variant="destructive" className="font-semibold">
                          {enrollment.dmv_test_attempts}× Failed
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground text-sm">No attempts</span>
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

  const [activeTab, setActiveTab] = useState('class-a');
  const filteredStudents = activeTab === 'class-a' ? classAEnrollments : classBEnrollments;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <PortalHeader 
        userRole="admin"
        userName={profile ? `${profile.first_name} ${profile.last_name}` : undefined}
        userEmail={user?.email}
      />
      <main className="flex-1 container mx-auto px-4 py-8 space-y-6">
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Student Management 🎓</h1>
          <p className="text-lg text-muted-foreground">Track progress and manage student enrollments</p>
        </div>

        {/* Filters */}
        <Card className="shadow-lg border-border/50 hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filters & Search
            </CardTitle>
            <CardDescription>Narrow down your student list</CardDescription>
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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted/50 p-1">
            <TabsTrigger 
              value="class-a" 
              className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Class A ({classAEnrollments.length})
            </TabsTrigger>
            <TabsTrigger 
              value="class-b"
              className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Class B ({classBEnrollments.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6 animate-fade-in">
            <Card className="shadow-lg border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {activeTab === 'class-a' ? 'Class A' : 'Class B'} Students
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Manage and track progress for {activeTab === 'class-a' ? 'Class A' : 'Class B'} students
                    </CardDescription>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {filteredStudents.length} students
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <EnrollmentTable enrollmentsList={filteredStudents} programType={activeTab} />
              </CardContent>
            </Card>
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
