import React, { useState, useTransition } from 'react';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { register } from '../../../actions/register';
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

const RegisterForm = () => {
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

  return (
    <Form {...form}>
      <form
        dir="rtl"
        className="mt-8 flex w-full flex-col items-start gap-4"
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
  );
};

export default RegisterForm;
