import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UrgencyNotificationProps {
  variant?: 'spots' | 'enrollment' | 'nextClass';
}

const UrgencyNotification = ({ variant = 'spots' }: UrgencyNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after a short delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const getNextMonday = () => {
    const today = new Date();
    const nextMonday = new Date(today);
    const daysUntilMonday = (8 - today.getDay()) % 7 || 7;
    nextMonday.setDate(today.getDate() + daysUntilMonday);
    return nextMonday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const notifications = {
    spots: {
      icon: <Users className="h-4 w-4" />,
      text: "Only 3 spots left in this week's class!",
      color: "bg-orange-600 text-white"
    },
    enrollment: {
      icon: <Users className="h-4 w-4" />,
      text: "Sarah from Minneapolis just enrolled 2 hours ago",
      color: "bg-green-600 text-white"
    },
    nextClass: {
      icon: <Calendar className="h-4 w-4" />,
      text: `Next class starts ${getNextMonday()} - Register today!`,
      color: "bg-blue-600 text-white"
    }
  };

  const notification = notifications[variant];

  return (
    <div 
      className={cn(
        "transition-all duration-500 transform",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      )}
    >
      <Badge className={cn("px-4 py-2 text-sm font-semibold flex items-center gap-2", notification.color)}>
        {notification.icon}
        {notification.text}
      </Badge>
    </div>
  );
};

export default UrgencyNotification;
