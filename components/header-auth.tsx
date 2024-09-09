import Link from 'next/link';

import { signOutAction } from '@/app/actions';
import { createClient } from '@/utils/supabase/server';
import { Button } from './ui/button';

const AuthButton = async () => {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Olá, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant={'outline'}>
          Cadastrar
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={'outline'}>
        <Link href="/sign-in">Entrar</Link>
      </Button>
      <Button asChild size="sm" variant={'default'}>
        <Link href="/sign-up">Cadastrar</Link>
      </Button>
    </div>
  );
};

export default AuthButton;
