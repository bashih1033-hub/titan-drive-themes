import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors, closestCorners, DragOverEvent } from '@dnd-kit/core';
import { useDroppable } from '@dnd-kit/core';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { LeadCard } from './LeadCard';
import { Phone, Mail, MessageSquare, User, CheckCircle2, XCircle } from 'lucide-react';

interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message?: string;
  status: string;
  program_interest?: string;
  created_at: string;
  notes?: string;
  last_contact_date?: string;
  converted_to_student_id?: string;
}

interface LeadCRMProps {
  leads: Lead[];
  onLeadsUpdate: () => void;
  students: any[];
}

const LEAD_STAGES = [
  { id: 'new', title: 'New Leads', icon: Mail, color: 'bg-blue-500' },
  { id: 'contacted', title: 'Contacted', icon: Phone, color: 'bg-purple-500' },
  { id: 'qualified', title: 'Qualified', icon: CheckCircle2, color: 'bg-green-500' },
  { id: 'negotiation', title: 'Negotiation', icon: MessageSquare, color: 'bg-orange-500' },
  { id: 'enrolled', title: 'Enrolled', icon: User, color: 'bg-teal-500' },
  { id: 'lost', title: 'Lost', icon: XCircle, color: 'bg-red-500' },
];

export function LeadCRM({ leads, onLeadsUpdate, students }: LeadCRMProps) {
  const { toast } = useToast();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [notes, setNotes] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const leadId = active.id as string;
    const newStatus = over.id as string;

    // Check if it's a valid stage
    if (!LEAD_STAGES.find(s => s.id === newStatus)) return;

    // Find the lead being moved
    const lead = leads.find(l => l.id === leadId);
    if (!lead || lead.status === newStatus) return;

    try {
      const { error } = await supabase
        .from('leads')
        .update({ 
          status: newStatus,
          last_contact_date: new Date().toISOString()
        })
        .eq('id', leadId);

      if (error) throw error;

      toast({
        title: 'Lead updated',
        description: `Moved to ${LEAD_STAGES.find(s => s.id === newStatus)?.title}`,
      });

      onLeadsUpdate();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setNotes(lead.notes || '');
    setDialogOpen(true);
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;

    try {
      const { error } = await supabase
        .from('leads')
        .update({ notes })
        .eq('id', selectedLead.id);

      if (error) throw error;

      toast({
        title: 'Notes saved',
        description: 'Lead notes updated successfully',
      });

      setDialogOpen(false);
      onLeadsUpdate();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const getLeadsByStage = (stage: string) => {
    return leads.filter(lead => lead.status === stage);
  };

  const activeLead = activeId ? leads.find(l => l.id === activeId) : null;

  function DroppableColumn({ id, children }: { id: string; children: React.ReactNode }) {
    const { setNodeRef, isOver } = useDroppable({ id });
    
    return (
      <div 
        ref={setNodeRef}
        className={`flex-1 overflow-y-auto p-2 space-y-2 transition-colors ${
          isOver ? 'bg-primary/5' : ''
        }`}
      >
        {children}
      </div>
    );
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {LEAD_STAGES.map((stage) => {
            const stageLeads = getLeadsByStage(stage.id);
            const StageIcon = stage.icon;

            return (
              <Card key={stage.id} className="flex flex-col h-[calc(100vh-300px)]">
                <CardHeader className={`${stage.color} text-white rounded-t-lg py-3`}>
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <StageIcon className="h-4 w-4" />
                    {stage.title}
                    <span className="ml-auto bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {stageLeads.length}
                    </span>
                  </CardTitle>
                </CardHeader>
                <DroppableColumn id={stage.id}>
                  {stageLeads.map((lead) => (
                    <LeadCard
                      key={lead.id}
                      lead={lead}
                      onView={() => handleViewLead(lead)}
                    />
                  ))}
                </DroppableColumn>
              </Card>
            );
          })}
        </div>

        <DragOverlay>
          {activeLead ? (
            <div className="bg-white border-2 border-primary rounded-lg p-4 shadow-lg opacity-90">
              <h3 className="font-semibold text-sm">{activeLead.first_name} {activeLead.last_name}</h3>
              <p className="text-xs text-muted-foreground">{activeLead.email}</p>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
            <DialogDescription>
              View and update lead information
            </DialogDescription>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="text-sm font-medium">{selectedLead.first_name} {selectedLead.last_name}</p>
                </div>
                <div>
                  <Label>Status</Label>
                  <p className="text-sm font-medium capitalize">{selectedLead.status}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-sm">{selectedLead.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="text-sm">{selectedLead.phone}</p>
                </div>
                <div className="col-span-2">
                  <Label>Program Interest</Label>
                  <p className="text-sm capitalize">{selectedLead.program_interest || 'Not specified'}</p>
                </div>
                <div className="col-span-2">
                  <Label>Initial Message</Label>
                  <p className="text-sm bg-muted p-3 rounded-md">{selectedLead.message || 'No message'}</p>
                </div>
                <div>
                  <Label>Created</Label>
                  <p className="text-sm">{new Date(selectedLead.created_at).toLocaleString()}</p>
                </div>
                {selectedLead.last_contact_date && (
                  <div>
                    <Label>Last Contact</Label>
                    <p className="text-sm">{new Date(selectedLead.last_contact_date).toLocaleString()}</p>
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about this lead..."
                  className="min-h-[120px] mt-2"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveNotes}>
                  Save Notes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}