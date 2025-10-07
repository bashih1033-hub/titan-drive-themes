import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, LayoutDashboard, GraduationCap, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import titanLogoCompact from '@/assets/titan-logo-compact.png';

interface PortalHeaderProps {
  userRole: 'admin' | 'student';
  userName?: string;
  userEmail?: string;
}

const PortalHeader = ({ userRole, userName, userEmail }: PortalHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const adminNavigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'CRM', href: '/admin/crm', icon: User },
    { name: 'Classes', href: '/admin/classes', icon: Calendar },
    { name: 'Students', href: '/admin/students', icon: GraduationCap },
  ];

  const studentNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Classes', href: '/dashboard?tab=classes', icon: Calendar },
    { name: 'Profile', href: '/dashboard?tab=profile', icon: User },
  ];

  const navigation = userRole === 'admin' ? adminNavigation : studentNavigation;

  const isActive = (href: string) => {
    const path = href.split('?')[0];
    return location.pathname === path;
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out',
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const initials = userName
    ? userName.split(' ').map(n => n[0]).join('').toUpperCase()
    : userEmail?.substring(0, 2).toUpperCase() || 'U';

  return (
    <header className="bg-background/80 border-b border-border/50 sticky top-0 z-50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <Link to={userRole === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-3">
              <img 
                src={titanLogoCompact} 
                alt="Titan Trucking School"
                className="h-10 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">
                  {userRole === 'admin' ? 'Admin Portal' : 'Student Portal'}
                </h1>
                <p className="text-xs text-muted-foreground">
                  Titan Trucking School
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-3 px-3 py-2 bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl border border-border/50 hover:border-primary/20 transition-all">
              <Avatar className="h-9 w-9 ring-2 ring-primary/10">
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-semibold leading-none">{userName || 'User'}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{userEmail}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="hover:bg-destructive hover:text-destructive-foreground transition-all"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-2">
            {/* User Info */}
            <div className="flex items-center gap-3 px-3 py-3 bg-muted rounded-lg mb-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm flex-1">
                <p className="font-medium">{userName || 'User'}</p>
                <p className="text-xs text-muted-foreground">{userEmail}</p>
              </div>
            </div>

            {/* Navigation Links */}
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}

            {/* Sign Out Button */}
            <Button
              variant="outline"
              className="w-full mt-3"
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default PortalHeader;