'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
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

import { register } from '../../../../actions/register';

const Login = () => {
  // error - success state
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  //transition
  const [isPending, startTransition] = useTransition();

  // react hook form
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  // const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
  //   setError('');
  //   setSuccess('');

  //   startTransition(async () => {
  //     try {
  //       const response = await axios.post('/api/register', values);

  //       const responseData = response.data;
  //       setSuccess(responseData.message);
  //       // handle response data
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         const serverError = error.response?.data;
  //         if (serverError && serverError.message) {
  //           setError(serverError.message);
  //         }
  //       }
  //     }
  //   });
  // };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <Logo />
        <Card className="mt-4 min-w-96">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>إشتراك</CardTitle>
            <CardDescription>
              لديك حساب؟{' '}
              <Link href="/auth/login" className="text-blue-500">
                سجل دخولك من هنا
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                dir="rtl"
                className="mt-2 flex w-full flex-col items-start gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>الإسم و اللقب</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
                          {...field}
                          disabled={isPending}
                          placeholder="مثال: أحمد سالم"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          className="w-full"
                          {...field}
                          disabled={isPending}
                          placeholder="example@email.com"
                          type="email"
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
                          className="w-full"
                          {...field}
                          disabled={isPending}
                          placeholder="******"
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* error - success output */}
                <FormError message={error} />
                <FormSuccess message={success} />

                {/* submit button */}
                <Button
                  color="default"
                  className="w-full"
                  type="submit"
                  disabled={isPending}
                >
                  إشتراك
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
          </CardContent>
          <CardFooter>
            <LoginWithSocial />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
