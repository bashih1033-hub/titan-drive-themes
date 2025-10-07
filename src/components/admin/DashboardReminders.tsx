import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Bell, DollarSign, PartyPopper, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DashboardRemindersProps {
  enrollments: any[];
}

export function DashboardReminders({ enrollments }: DashboardRemindersProps) {
  const { toast } = useToast();

  // Find students who need DMV fee reminder (failed 3+ times)
  const dmvFeeReminders = enrollments.filter(
    e => e.dmv_test_attempts >= 3 && e.dmv_test_status !== 'passed'
  );

  // Find students who passed DMV test
  const congratulationsReminders = enrollments.filter(
    e => e.dmv_test_status === 'passed' && e.status === 'completed'
  );

  const handleSendNotification = (studentId: string, studentName: string, type: 'dmv-fee' | 'congratulations') => {
    // This would trigger an email/SMS sending function
    toast({
      title: 'Notification Sent',
      description: `${type === 'dmv-fee' ? 'DMV fee reminder' : 'Congratulations message'} sent to ${studentName}`,
    });
  };

  if (dmvFeeReminders.length === 0 && congratulationsReminders.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* DMV Fee Reminders */}
      {dmvFeeReminders.length > 0 && (
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-lg">DMV Fee Reminders</CardTitle>
              <Badge variant="secondary">{dmvFeeReminders.length}</Badge>
            </div>
            <CardDescription>
              Students who have failed the DMV test 3 or more times need to be charged for additional test fees
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {dmvFeeReminders.map((enrollment) => (
              <Alert key={enrollment.id} className="bg-orange-50 dark:bg-orange-950/20">
                <Bell className="h-4 w-4" />
                <AlertDescription className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">
                      {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Failed {enrollment.dmv_test_attempts} times - Additional DMV fee required
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleSendNotification(
                          enrollment.student_id,
                          `${enrollment.profiles.first_name} ${enrollment.profiles.last_name}`,
                          'dmv-fee'
                        )
                      }
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        handleSendNotification(
                          enrollment.student_id,
                          `${enrollment.profiles.first_name} ${enrollment.profiles.last_name}`,
                          'dmv-fee'
                        )
                      }
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Text
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Congratulations Reminders */}
      {congratulationsReminders.length > 0 && (
        <Card className="border-green-200 dark:border-green-900">
          <CardHeader>
            <div className="flex items-center gap-2">
              <PartyPopper className="h-5 w-5 text-green-600" />
              <CardTitle className="text-lg">Congratulations Pending</CardTitle>
              <Badge variant="secondary">{congratulationsReminders.length}</Badge>
            </div>
            <CardDescription>
              Students who have graduated and need congratulations messages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {congratulationsReminders.map((enrollment) => (
              <Alert key={enrollment.id} className="bg-green-50 dark:bg-green-950/20">
                <PartyPopper className="h-4 w-4" />
                <AlertDescription className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">
                      {enrollment.profiles.first_name} {enrollment.profiles.last_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Successfully passed DMV test! Send congratulations message
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        handleSendNotification(
                          enrollment.student_id,
                          `${enrollment.profiles.first_name} ${enrollment.profiles.last_name}`,
                          'congratulations'
                        )
                      }
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      onClick={() =>
                        handleSendNotification(
                          enrollment.student_id,
                          `${enrollment.profiles.first_name} ${enrollment.profiles.last_name}`,
                          'congratulations'
                        )
                      }
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Text
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
