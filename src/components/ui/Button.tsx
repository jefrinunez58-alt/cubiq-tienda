import React from 'react';
import type { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#D8C8F0] hover:bg-[#c4b5e8] text-[#30343B] focus:ring-[#D8C8F0]',
    secondary: 'bg-[#BFE8D0] hover:bg-[#a8e0c4] text-[#30343B] focus:ring-[#BFE8D0]',
    outline: 'border-2 border-[#D8C8F0] hover:bg-[#D8C8F0] text-[#30343B] focus:ring-[#D8C8F0]',
    ghost: 'hover:bg-[#f5f3ff] text-[#30343B] focus:ring-[#D8C8F0]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
