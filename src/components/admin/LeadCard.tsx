import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeadCardProps {
  lead: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    program_interest?: string;
    created_at: string;
    notes?: string;
  };
  onView: () => void;
}

export function LeadCard({ lead, onView }: LeadCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: lead.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
    >
      <CardContent className="p-3 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-sm leading-tight">
            {lead.first_name} {lead.last_name}
          </h3>
          <Button
            size="sm"
            variant="ghost"
            className="h-6 w-6 p-0"
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
          >
            <Eye className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Mail className="h-3 w-3" />
            <span className="truncate">{lead.email}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{lead.phone}</span>
          </div>
        </div>

        {lead.program_interest && (
          <Badge variant="secondary" className="text-xs">
            {lead.program_interest}
          </Badge>
        )}

        <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1 border-t">
          <Calendar className="h-3 w-3" />
          <span>{new Date(lead.created_at).toLocaleDateString()}</span>
        </div>

        {lead.notes && (
          <div className="text-xs text-muted-foreground italic truncate">
            Note: {lead.notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}