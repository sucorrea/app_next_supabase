import Link from 'next/link';

import { signInAction } from '@/app/actions';
import FormMessage, { Message } from '@/components/form-message';
import SubmitButton from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type LoginProps = {
  searchParams: Message;
};

const Login = ({ searchParams }: LoginProps) => {
  return (
    <form className="flex min-w-64 flex-1 flex-col">
      <h1 className="text-2xl font-medium">Login</h1>
      <p className="text-sm text-foreground">
        Não tem uma conta?{' '}
        <Link className="font-medium text-foreground underline" href="/sign-up">
          Cadastre-se
        </Link>
      </p>
      <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" placeholder="e-mail" required />
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Senha</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Esqueceu a senha?
          </Link>
        </div>
        <Input type="password" name="password" placeholder="Senha" required />
        <SubmitButton pendingText="Entrando..." formAction={signInAction}>
          Entrar
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
};

export default Login;
