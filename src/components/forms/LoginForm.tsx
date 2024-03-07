'use client';

import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { login } from '../../../actions/login';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import FormError from './FormError';
import FormSuccess from './FormSuccess';

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  // error - success state
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  //transition
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() => setError('يبدو أن هناك مشكلة'));
    });
  };

  return (
    <Form {...form}>
      <form
        dir="rtl"
        className="mt-8 flex w-full flex-col items-start gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input
                  dir="ltr"
                  {...field}
                  disabled={isPending}
                  placeholder="example@email.com"
                  type="email"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>كلمة المرور</FormLabel>
              <FormControl>
                <Input
                  dir="ltr"
                  {...field}
                  disabled={isPending}
                  placeholder="******"
                  type="password"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          color="default"
          className="w-full"
          type="submit"
          disabled={isPending}
        >
          متابعة
        </Button>

        {/* divider */}
        <div className="mx-auto flex flex-row items-center gap-2">
          {/* first line */}
          <div className="h-1 w-20 border-b border-zinc-500"></div>
          {/* أو */}
          <span className="text-xs">أو إستخدام</span>
          {/* second line */}
          <div className="h-1 w-20 border-b border-zinc-500"></div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
