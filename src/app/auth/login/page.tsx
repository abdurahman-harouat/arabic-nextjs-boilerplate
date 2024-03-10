'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormError from '@/components/forms/FormError';
import FormSuccess from '@/components/forms/FormSuccess';
import LoginWithSocial from '@/components/forms/LoginWithSocial';
import Logo from '@/components/Logo';

import { login } from '../../../../actions/login';

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'لقد تم إستخدام هذا البريد بالفعل!'
      : '';

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

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   setError('');
  //   setSuccess('');

  //   startTransition(() => {
  //     login(values, callbackUrl)
  //       .then((data) => {
  //         if (data?.error) {
  //           form.reset();
  //           setError(data.error);
  //         }

  //         if (data?.success) {
  //           form.reset();
  //           setSuccess(data.success);
  //         }
  //       })
  //       .catch(() => setError('يبدو أن هناك مشكلة'));
  //   });
  // };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <Logo />
        <Card className="mt-20 w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>
              ليس لديك حساب ؟{' '}
              <Link href="/auth/register" className="text-blue-500">
                إشترك من هنا
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
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
                  <FormError message={error || urlError} />
                  <FormSuccess message={success} />
                  <Button
                    color="default"
                    className="w-full"
                    type="submit"
                    disabled={isPending}
                  >
                    متابعة
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {/* divider */}
            <div className="flex flex-row items-center gap-2">
              {/* first line */}
              <div className="h-1 w-20 border-b border-zinc-500"></div>
              {/* أو */}
              <span className="text-sm">أو</span>
              {/* second line */}
              <div className="h-1 w-20 border-b border-zinc-500"></div>
            </div>
            {/* login with social media */}
            <LoginWithSocial />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
