import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface BulkProgressUpdateProps {
  selectedEnrollments: any[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

export function BulkProgressUpdate({ selectedEnrollments, open, onOpenChange, onUpdate }: BulkProgressUpdateProps) {
  const { toast } = useToast();
  const [targetModule, setTargetModule] = useState('');
  const [dmvResult, setDmvResult] = useState<'passed' | 'failed' | ''>('');
  const [updating, setUpdating] = useState(false);

  const handleBulkUpdate = async () => {
    if (!targetModule) return;

    setUpdating(true);
    try {
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
      
      const completionField = moduleFieldMap[targetModule];
      
      const updates = selectedEnrollments.map(async (enrollment) => {
        const updateData: any = {
          current_module: targetModule,
        };
        
        if (completionField) {
          updateData[completionField] = now;
        }

        // Handle DMV completion
        if (targetModule === 'dmv_completed' && dmvResult) {
          updateData.dmv_test_status = dmvResult;
          updateData.dmv_completed_at = now;
          
          if (dmvResult === 'failed') {
            updateData.dmv_test_attempts = (enrollment.dmv_test_attempts || 0) + 1;
          } else if (dmvResult === 'passed') {
            updateData.status = 'completed';
          }
        }

        return supabase
          .from('enrollments')
          .update(updateData)
          .eq('id', enrollment.id);
      });

      await Promise.all(updates);

      toast({
        title: 'Bulk Update Complete',
        description: `Successfully updated ${selectedEnrollments.length} students`,
      });

      onOpenChange(false);
      onUpdate();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Bulk Update Progress</DialogTitle>
          <DialogDescription>
            Update progress for {selectedEnrollments.length} selected students
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Selected Students Preview */}
          <div className="bg-muted p-4 rounded-lg space-y-2 max-h-48 overflow-y-auto">
            <p className="text-sm font-medium">Selected Students:</p>
            <div className="space-y-1">
              {selectedEnrollments.map((enrollment) => (
                <div key={enrollment.id} className="text-sm flex items-center justify-between bg-background rounded px-2 py-1">
                  <span>
                    {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                  </span>
                  <Badge variant="outline" className="text-xs capitalize">
                    Current: {enrollment.current_module?.replace(/_/g, ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Target Module Selection */}
          <div className="space-y-2">
            <Label>Move All Students To</Label>
            <Select value={targetModule} onValueChange={setTargetModule}>
              <SelectTrigger>
                <SelectValue placeholder="Select target module..." />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(MODULE_LABELS).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* DMV Result (if DMV module selected) */}
          {targetModule === 'dmv_completed' && (
            <div className="space-y-2">
              <Label>DMV Test Result (applies to all)</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={dmvResult === 'passed' ? 'default' : 'outline'}
                  onClick={() => setDmvResult('passed')}
                  className="w-full"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Passed
                </Button>
                <Button
                  variant={dmvResult === 'failed' ? 'destructive' : 'outline'}
                  onClick={() => setDmvResult('failed')}
                  className="w-full"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Failed
                </Button>
              </div>
            </div>
          )}

          {/* Warning */}
          {targetModule && (
            <div className="flex items-start gap-2 p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-orange-900 dark:text-orange-100">
                  This will update all {selectedEnrollments.length} selected students
                </p>
                <p className="text-orange-700 dark:text-orange-300 mt-1">
                  Their progress will be set to: <strong>{MODULE_LABELS[targetModule]}</strong>
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button 
              variant="outline" 
              className="flex-1" 
              onClick={() => onOpenChange(false)}
              disabled={updating}
            >
              Cancel
            </Button>
            <Button
              className="flex-1"
              onClick={handleBulkUpdate}
              disabled={!targetModule || (targetModule === 'dmv_completed' && !dmvResult) || updating}
            >
              {updating ? 'Updating...' : `Update ${selectedEnrollments.length} Students`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
