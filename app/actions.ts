'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { encodedRedirect } from '@/utils/utils';
import { Aniversario, LuluById } from '@/utils/types/Types';

export const signUpAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const supabase = createClient();
  const origin = headers().get('origin');

  if (!email || !password) {
    return { error: 'E-mail e senha são obrigatórios' };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + ' ' + error.message);
    return encodedRedirect('error', '/sign-up', error.message);
  } else {
    return encodedRedirect(
      'success',
      '/sign-up',
      'Obrigado por se inscrever! Por favor, verifique seu e-mail para verificação com o link de confirmação.'
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect('error', '/sign-in', error.message);
  }

  return redirect('/protected');
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString();
  const supabase = createClient();
  const origin = headers().get('origin');
  const callbackUrl = formData.get('callbackUrl')?.toString();

  if (!email) {
    return encodedRedirect('error', '/forgot-password', 'E-mail é obrigatório');
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      'error',
      '/forgot-password',
      'Não foi possível redefinir a senha'
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    'success',
    '/forgot-password',
    'Verifique seu e-mail para obter um link para redefinir sua senha.'
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      'error',
      '/protected/reset-password',
      'Senha e confirmação de senha são obrigatórias'
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      'error',
      '/protected/reset-password',
      'As senhas não correspondem'
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      'error',
      '/protected/reset-password',
      'Falha na alteração da senha'
    );
  }

  encodedRedirect('success', '/protected/reset-password', 'Senha alterada');
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect('/sign-in');
};
export const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
};

export const getAniversarios = async () => {
  const { data, error } = await createClient()
    .rpc('get_aniversarios')
    .select('*');

  if (error) {
    console.error(error);
  }

  return data as Aniversario[];
};

export async function getFotosById(id: number) {
  const { data, error } = await createClient()
    .rpc('get_fotobyid', { id_lulu: Number(id) })
    .select('*')
    .single();

  const nomeArquivo = data?.nome ?? '';
  const { data: urlFoto } = await createClient()
    .storage.from('app_storage')
    .getPublicUrl(nomeArquivo);

  if (error) {
    console.error(error);
  }

  return urlFoto.publicUrl as string;
}

export const getLuluById = async (idLulu: number): Promise<LuluById> => {
  const { data, error } = await createClient()
    .from('lulus')
    .select('*')
    .eq('id', idLulu)
    .single();

  if (error) {
    console.error(error);
  }
  return data as LuluById;
};

export const getFotos = async () => {
  const { data, error } = await createClient()
    .storage.from('app_storage')
    .list('images/');

  const allUrls = data?.map(
    (image) =>
      createClient().storage.from('app_storage').getPublicUrl(image.name).data
        .publicUrl
  );
  if (error) {
    console.error(error);
  }

  return allUrls as string[];
};
