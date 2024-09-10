import { forgotPasswordAction } from '@/app/actions';
import FormMessage, { Message } from '@/components/form-message';
import SubmitButton from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface ForgotPasswordProps {
  searchParams: Message;
}

const ForgotPassword = ({ searchParams }: ForgotPasswordProps) => {
  return (
    <>
      <form className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">Redefinir Senha</h1>
          <p className="text-sm text-secondary-foreground">
            Já tem uma conta?{' '}
            <Link className="text-primary underline" href="/sign-in">
              Entrar{' '}
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="e-mail" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Redefinir Senha
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
