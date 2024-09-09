import { resetPasswordAction } from '@/app/actions';
import FormMessage, { Message } from '@/components/form-message';
import { SubmitButton } from '@/components/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ResetPasswordProps = {
  searchParams: Message;
};

const ResetPassword = async ({ searchParams }: ResetPasswordProps) => {
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Redefinir Senha </h1>
      <p className="text-sm text-foreground/60">
        Por favor, insira sua nova senha.
      </p>
      <Label htmlFor="password">Nova Senha</Label>
      <Input
        type="password"
        name="password"
        placeholder="Nova senha"
        required
      />
      <Label htmlFor="confirmPassword">Confirmar Senha</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar senha"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Redefinir Senha
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
};
export default ResetPassword;
