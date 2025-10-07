import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Calendar } from 'lucide-react';

interface StudentModuleProgressProps {
  enrollment: any;
  onUpdate: () => void;
}

const MODULE_LABELS: Record<string, string> = {
  permit_prep: 'Permit Prep & DOT Medical',
  eldt_theory: 'ELDT Theory',
  pre_trip_inspection: 'Pre-Trip Inspection',
  behind_wheel_parking: 'Behind the Wheel - Parking/Yard',
  behind_wheel_road: 'Behind the Wheel - Public Road',
  dmv_scheduled: 'DMV Test Scheduled',
  dmv_completed: 'DMV Test Completed'
};

const MODULE_ORDER = [
  'permit_prep',
  'eldt_theory',
  'pre_trip_inspection',
  'behind_wheel_parking',
  'behind_wheel_road',
  'dmv_scheduled',
  'dmv_completed'
];

export function StudentModuleProgress({ enrollment, onUpdate }: StudentModuleProgressProps) {
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(enrollment.current_module || 'permit_prep');
  const [dmvResult, setDmvResult] = useState<'passed' | 'failed' | ''>('');

  const currentModuleIndex = MODULE_ORDER.indexOf(enrollment.current_module);
  const availableModules = MODULE_ORDER.slice(0, currentModuleIndex + 2);

  const handleUpdateProgress = async () => {
    try {
      const updates: any = {
        current_module: selectedModule,
      };

      // Set completion timestamp for the module
      const now = new Date().toISOString();
      
      // Map module names to correct database column names
      const moduleFieldMap: Record<string, string> = {
        'permit_prep': 'permit_prep_completed_at',
        'eldt_theory': 'eldt_theory_completed_at',
        'pre_trip_inspection': 'pre_trip_completed_at',
        'behind_wheel_parking': 'parking_completed_at',
        'behind_wheel_road': 'road_completed_at',
        'dmv_scheduled': 'dmv_scheduled_at',
        'dmv_completed': 'dmv_completed_at'
      };
      
      const completionField = moduleFieldMap[selectedModule];
      
      if (selectedModule !== enrollment.current_module && completionField) {
        updates[completionField] = now;
      }

      // Handle DMV test results
      if (selectedModule === 'dmv_completed' && dmvResult) {
        updates.dmv_test_status = dmvResult;
        updates.dmv_completed_at = now;
        
        if (dmvResult === 'failed') {
          updates.dmv_test_attempts = (enrollment.dmv_test_attempts || 0) + 1;
        } else if (dmvResult === 'passed') {
          updates.status = 'completed';
        }
      }

      const { error } = await supabase
        .from('enrollments')
        .update(updates)
        .eq('id', enrollment.id);

      if (error) throw error;

      toast({
        title: 'Progress updated',
        description: 'Student module progress has been updated',
      });

      setDialogOpen(false);
      onUpdate();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const getModuleStatus = (module: string) => {
    const moduleIndex = MODULE_ORDER.indexOf(module);
    const currentIndex = MODULE_ORDER.indexOf(enrollment.current_module);
    
    if (moduleIndex < currentIndex) return 'completed';
    if (moduleIndex === currentIndex) return 'in-progress';
    return 'pending';
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setDialogOpen(true)}
        className="w-full"
      >
        Update Progress
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Update Progress: {enrollment.profiles.first_name} {enrollment.profiles.last_name}
            </DialogTitle>
            <DialogDescription>
              Track student progress through course modules
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Current Progress Overview */}
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Current Module</span>
                <Badge>{MODULE_LABELS[enrollment.current_module]}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-2xl font-bold text-primary">{enrollment.progress_percentage}%</span>
              </div>
              {enrollment.dmv_test_attempts > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">DMV Test Attempts</span>
                  <Badge variant="destructive">{enrollment.dmv_test_attempts} failed</Badge>
                </div>
              )}
            </div>

            {/* Module Timeline */}
            <div className="space-y-2">
              <Label>Course Modules</Label>
              <div className="space-y-2">
                {MODULE_ORDER.map((module, index) => {
                  const status = getModuleStatus(module);
                  
                  // Map module names to correct database column names
                  const moduleFieldMap: Record<string, string> = {
                    'permit_prep': 'permit_prep_completed_at',
                    'eldt_theory': 'eldt_theory_completed_at',
                    'pre_trip_inspection': 'pre_trip_completed_at',
                    'behind_wheel_parking': 'parking_completed_at',
                    'behind_wheel_road': 'road_completed_at',
                    'dmv_scheduled': 'dmv_scheduled_at',
                    'dmv_completed': 'dmv_completed_at'
                  };
                  
                  const completionField = moduleFieldMap[module];
                  const completedAt = enrollment[completionField];

                  return (
                    <div
                      key={module}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                        status === 'completed'
                          ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800'
                          : status === 'in-progress'
                          ? 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800'
                          : 'bg-muted border-muted'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background">
                          {status === 'completed' ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : status === 'in-progress' ? (
                            <span className="font-bold text-primary">{index + 1}</span>
                          ) : (
                            <span className="text-muted-foreground">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{MODULE_LABELS[module]}</p>
                          {completedAt && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Completed: {new Date(completedAt).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                      <Badge variant={status === 'completed' ? 'default' : status === 'in-progress' ? 'secondary' : 'outline'}>
                        {status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Update Module Selection */}
            <div className="space-y-2">
              <Label>Move Student To Module</Label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableModules.map((module) => (
                    <SelectItem key={module} value={module}>
                      {MODULE_LABELS[module]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* DMV Test Result (only show if DMV module is selected) */}
            {selectedModule === 'dmv_completed' && (
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                    📋 Record DMV Test Result
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Select whether the student passed or failed their DMV road test.
                    {enrollment.dmv_test_attempts > 0 && (
                      <span className="block mt-1 font-medium">
                        ⚠️ Current attempts: {enrollment.dmv_test_attempts} 
                        {enrollment.dmv_test_attempts >= 3 && " (DMV fee required for retake)"}
                      </span>
                    )}
                  </p>
                </div>
                
                <Label>DMV Test Result *</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={dmvResult === 'passed' ? 'default' : 'outline'}
                    onClick={() => setDmvResult('passed')}
                    className="w-full h-auto py-4 flex-col gap-2 hover:scale-105 transition-transform"
                  >
                    <CheckCircle2 className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-semibold">Passed</div>
                      <div className="text-xs opacity-80">Status → Completed</div>
                    </div>
                  </Button>
                  <Button
                    variant={dmvResult === 'failed' ? 'destructive' : 'outline'}
                    onClick={() => setDmvResult('failed')}
                    className="w-full h-auto py-4 flex-col gap-2 hover:scale-105 transition-transform"
                  >
                    <XCircle className="h-6 w-6" />
                    <div className="text-center">
                      <div className="font-semibold">Failed</div>
                      <div className="text-xs opacity-80">Attempts +1</div>
                    </div>
                  </Button>
                </div>
                
                {dmvResult === 'failed' && (
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg p-3">
                    <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                      🔄 This will increment DMV test attempts to: {(enrollment.dmv_test_attempts || 0) + 1}
                    </p>
                    {(enrollment.dmv_test_attempts || 0) + 1 >= 3 && (
                      <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
                        💰 Student will need to pay DMV retest fee before next attempt
                      </p>
                    )}
                  </div>
                )}
                
                {dmvResult === 'passed' && (
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      🎉 Student will be marked as COMPLETED (100% progress)
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button variant="outline" className="flex-1" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                className="flex-1"
                onClick={handleUpdateProgress}
                disabled={selectedModule === 'dmv_completed' && !dmvResult}
              >
                Update Progress
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
