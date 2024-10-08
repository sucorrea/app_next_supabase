'use client';
import { type ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

const SubmitButton = ({
  children,
  pendingText = 'Enviando...',
  ...props
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
};

export default SubmitButton;
