'use client';
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import React, { useState } from 'react';

const SignInWithGoogle: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Função para autenticar com o Google
  const handleSignIn = async () => {
    setLoading(true);
    setError(null);

    const { error } = await createClient().auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      {error && <p className="mb-4 text-red-500">Error: {error}</p>}
      <Button
        //className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleSignIn}
        disabled={loading}
        variant="outline"
      >
        <Image
          src="/google.svg"
          alt="luluzinha"
          width={30}
          height={30}
          className="rounded-full"
        />
        {loading ? 'Loading...' : 'Sign in with Google'}
      </Button>
    </div>
  );
};

export default SignInWithGoogle;
