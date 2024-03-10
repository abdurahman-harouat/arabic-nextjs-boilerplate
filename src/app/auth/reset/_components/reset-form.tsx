'use client';

import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { ResetSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
import Logo from '@/components/Logo';

import { reset } from '../../../../../actions/reset';

const ResetForm = () => {
  // error - success state
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  //transition
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex h-full flex-col items-center justify-center">
        <Logo />
        <Card className="mt-7 w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>تجديد كلمة المرور</CardTitle>
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
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button
                    color="default"
                    className="w-full"
                    type="submit"
                    disabled={isPending}
                  >
                    إرسال بريد إلكتروني
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetForm;
