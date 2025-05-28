
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { useAppData } from '@/hooks/useAppData';

const { link } = useAppData();

interface WhatsAppButtonProps {
  text: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'lg' | 'default';
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text, 
  variant = 'default', 
  size = 'default',
  className = ''
}) => {
  const handleWhatsAppClick = () => {
    
    window.open(link, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
    >
      <MessageSquare className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
};
