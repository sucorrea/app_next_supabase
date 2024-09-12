import Link from 'next/link';
import { Button } from './ui/button';

const ActionHeader = () => (
  <div className="flex items-center gap-4">
    <div className="flex gap-2">
      <Button
        asChild
        size="sm"
        variant={'outline'}
        disabled
        className="pointer-events-none cursor-none opacity-75"
      >
        <Link href="/sign-in">Entrar</Link>
      </Button>
      <Button
        asChild
        size="sm"
        variant={'default'}
        disabled
        className="pointer-events-none cursor-none opacity-75"
      >
        <Link href="/sign-up">Cadastrar</Link>
      </Button>
    </div>
  </div>
);

export default ActionHeader;
