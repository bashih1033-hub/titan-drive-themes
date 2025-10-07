import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  onClick?: () => void;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'success';
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  onClick,
  className,
  gradient = 'primary',
}: StatsCardProps) {
  const gradientClasses = {
    primary: 'from-primary/10 to-primary/5',
    secondary: 'from-secondary/10 to-secondary/5',
    accent: 'from-accent/10 to-accent/5',
    success: 'from-green-500/10 to-green-500/5',
  };

  return (
    <Card
      className={cn(
        'group relative overflow-hidden transition-all duration-300',
        'hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Gradient background */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300',
        'group-hover:opacity-100',
        gradientClasses[gradient]
      )} />
      
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn(
          'h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center',
          'transition-transform duration-300 group-hover:scale-110',
          'from-primary/20 to-primary/10'
        )}>
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold tracking-tight">{value}</div>
          {trend && (
            <div className={cn(
              'flex items-center gap-1 text-xs font-medium',
              trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            )}>
              <span>{trend.isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
