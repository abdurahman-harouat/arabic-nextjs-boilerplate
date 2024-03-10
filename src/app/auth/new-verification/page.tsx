'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import FormError from '@/components/forms/FormError';
import FormSuccess from '@/components/forms/FormSuccess';

import { cn } from '../../../../lib/utils';

const NewVerificationPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError('رمز التحقق غير موجود');
      return;
    }

    try {
      const response = await axios.post('/api/new-verification', { token });

      const responseData = response.data;
      setSuccess(responseData.message);
      // handle response data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data;
        if (serverError && serverError.message) {
          setError(serverError.message);
        }
      }
    }

    // newVerification(token)
    //   .then((data) => {
    //     setSuccess(data.success);
    //     setError(data.error);
    //   })
    //   .catch(() => {
    //     setError("Something went wrong!");
    //   })
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Card className="flex min-w-80 flex-col items-center justify-center text-center">
        <CardHeader>
          <CardTitle>تأكيد 🔐</CardTitle>
          <CardDescription>التحقق من البريد الإلكتروني</CardDescription>
        </CardHeader>
        <CardContent>
          {!success && !error && (
            <div className="relative">
              <span className="dots-flow"></span>
            </div>
          )}
          <FormSuccess message={success} />
          {!success && <FormError message={error} />}
        </CardContent>
        <CardFooter>
          <Link
            href="/auth/login"
            className={cn(
              'flex flex-row items-center gap-1 text-sm',
              buttonVariants({ variant: 'secondary' })
            )}
          >
            الرجوع إلى صفحة التسجيل <MdKeyboardDoubleArrowLeft />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewVerificationPage;
