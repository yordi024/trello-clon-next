'use client';

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';

interface FormSubmitProps extends ButtonProps {}

export const FormSubmit = ({ children, disabled, className, variant }: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending || disabled} variant={variant} size="sm" className={cn(className)}>
      {children}
    </Button>
  );
};
