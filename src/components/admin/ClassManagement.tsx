import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Users, DollarSign, UserPlus, BookOpen, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { StudentModuleProgress } from './StudentModuleProgress';

interface ClassManagementProps {
  classes: any[];
  enrollments: any[];
  students: any[];
  leads: any[];
  onUpdate: () => void;
}

export function ClassManagement({ classes, enrollments, students, leads, onUpdate }: ClassManagementProps) {
  const { toast } = useToast();
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedLead, setSelectedLead] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');

  const handleEnrollStudent = async () => {
    if (!selectedClass || (!selectedStudent && !selectedLead)) return;

    const studentId = selectedStudent || selectedLead;

    try {
      // Check if already enrolled
      const { data: existing } = await supabase
        .from('enrollments')
        .select('id')
        .eq('student_id', studentId)
        .eq('class_id', selectedClass.id)
        .single();

      if (existing) {
        toast({
          title: 'Already enrolled',
          description: 'This student is already enrolled in this class',
          variant: 'destructive',
        });
        return;
      }

      // Create enrollment
      const { error: enrollError } = await supabase
        .from('enrollments')
        .insert({
          student_id: studentId,
          class_id: selectedClass.id,
          status: 'in-progress',
          payment_status: paymentAmount ? 'partial' : 'pending',
          amount_paid: parseFloat(paymentAmount) || 0,
        });

      if (enrollError) throw enrollError;

      // Update class enrolled count
      const { error: classError } = await supabase
        .from('classes')
        .update({ enrolled_count: (selectedClass.enrolled_count || 0) + 1 })
        .eq('id', selectedClass.id);

      if (classError) throw classError;

      // If enrolling from lead, update lead status
      if (selectedLead) {
        await supabase
          .from('leads')
          .update({ 
            status: 'enrolled',
            converted_to_student_id: studentId
          })
          .eq('id', selectedLead);
      }

      toast({
        title: 'Student enrolled',
        description: 'Successfully enrolled student in class',
      });

      setEnrollDialogOpen(false);
      setSelectedStudent('');
      setSelectedLead('');
      setPaymentAmount('');
      onUpdate();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const getClassEnrollments = (classId: string) => {
    return enrollments.filter(e => e.class_id === classId);
  };

  const getAvailableLeads = () => {
    return leads.filter(l => l.status === 'qualified' || l.status === 'negotiation');
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => {
          const classEnrollments = getClassEnrollments(cls.id);
          const capacityPercentage = (cls.enrolled_count / cls.capacity) * 100;

          return (
            <Card key={cls.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="capitalize text-lg">
                      {cls.program_type.replace('-', ' ')}
                    </CardTitle>
                    <CardDescription>
                      {cls.instructor_name || 'Instructor TBD'}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={cls.status === 'scheduled' ? 'default' : 'secondary'}
                    className="capitalize"
                  >
                    {cls.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Start Date</p>
                      <p className="font-medium">{new Date(cls.start_date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Price</p>
                      <p className="font-bold text-primary">${cls.price}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Enrollment</span>
                    </div>
                    <span className="text-muted-foreground">
                      {cls.enrolled_count || 0}/{cls.capacity}
                    </span>
                  </div>
                  <Progress value={capacityPercentage} className="h-2" />
                </div>

                {classEnrollments.length > 0 && (
                  <div className="space-y-2 border-t pt-3">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <BookOpen className="h-4 w-4" />
                      <span>Enrolled Students</span>
                    </div>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {classEnrollments.map((enrollment) => (
                        <div
                          key={enrollment.id}
                          className="space-y-2 bg-muted/50 rounded p-3"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium">
                              {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                            </span>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {enrollment.progress_percentage}%
                              </Badge>
                              <Badge
                                variant={
                                  enrollment.payment_status === 'paid'
                                    ? 'default'
                                    : enrollment.payment_status === 'partial'
                                    ? 'secondary'
                                    : 'destructive'
                                }
                                className="text-xs"
                              >
                                {enrollment.payment_status}
                              </Badge>
                            </div>
                          </div>
                          <StudentModuleProgress
                            enrollment={enrollment}
                            onUpdate={onUpdate}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  className="w-full"
                  onClick={() => {
                    setSelectedClass(cls);
                    setEnrollDialogOpen(true);
                  }}
                  disabled={cls.enrolled_count >= cls.capacity}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Enroll Student
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={enrollDialogOpen} onOpenChange={setEnrollDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Enroll Student</DialogTitle>
            <DialogDescription>
              Add a student or convert a lead to this class
            </DialogDescription>
          </DialogHeader>
          {selectedClass && (
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-semibold capitalize">
                  {selectedClass.program_type.replace('-', ' ')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Starts: {new Date(selectedClass.start_date).toLocaleDateString()}
                </p>
                <p className="text-lg font-bold text-primary">${selectedClass.price}</p>
              </div>

              <div className="space-y-2">
                <Label>Select from Existing Students</Label>
                <Select value={selectedStudent} onValueChange={(value) => {
                  setSelectedStudent(value);
                  setSelectedLead('');
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a student..." />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.first_name} {student.last_name} - {student.email}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Convert Lead to Student</Label>
                <Select value={selectedLead} onValueChange={(value) => {
                  setSelectedLead(value);
                  setSelectedStudent('');
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a qualified lead..." />
                  </SelectTrigger>
                  <SelectContent>
                    {getAvailableLeads().map((lead) => (
                      <SelectItem key={lead.id} value={lead.id}>
                        {lead.first_name} {lead.last_name} - {lead.program_interest || 'Any program'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment">Initial Payment (Optional)</Label>
                <Input
                  id="payment"
                  type="number"
                  placeholder="0.00"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setEnrollDialogOpen(false);
                    setSelectedStudent('');
                    setSelectedLead('');
                    setPaymentAmount('');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1"
                  onClick={handleEnrollStudent}
                  disabled={!selectedStudent && !selectedLead}
                >
                  Enroll
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}