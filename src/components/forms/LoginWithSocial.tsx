import React from 'react';
import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '../ui/button';

const LoginWithSocial = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: '/applications',
    });
  };
  return (
    <div className="mx-auto mt-6 flex flex-row gap-4">
      {/* continue with google */}
      <Button
        className="w-full"
        variant="secondary"
        onClick={() => onClick('google')}
      >
        <FcGoogle className="size-5" />
      </Button>

      {/* continue with github */}
      <Button
        className="w-full"
        variant="secondary"
        onClick={() => onClick('github')}
      >
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};

export default LoginWithSocial;
