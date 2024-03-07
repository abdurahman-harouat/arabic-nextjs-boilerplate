'use client';

import { IoCloseOutline, IoLogIn } from 'react-icons/io5';

import LoginForm from './forms/LoginForm';
import LoginWithSocial from './forms/LoginWithSocial';
import RegisterForm from './forms/RegisterForm';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { Button, buttonVariants } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function AuthentificationModal() {
  return (
    <>
      {/* modal */}
      <AlertDialog>
        {/* trigger */}
        <AlertDialogTrigger asChild>
          <button
            className={`text-sm ${buttonVariants({
              variant: 'default',
            })}`}
          >
            <span className="hidden md:flex">تسجيل الدخول</span>{' '}
            <IoLogIn className="size-5 md:hidden" />
          </button>
        </AlertDialogTrigger>
        {/* modal content */}
        <AlertDialogContent>
          <AlertDialogHeader className="flex items-start justify-start">
            {/* close */}
            <AlertDialogCancel className="m-0 max-w-min border-none bg-transparent p-0">
              <Button variant="secondary" className="rounded-2xl">
                <IoCloseOutline className="size-5" />
              </Button>
            </AlertDialogCancel>
          </AlertDialogHeader>
          <div className="mx-auto mt-10 flex w-11/12 flex-col items-center">
            <Tabs defaultValue="تسجيل الدخول" className="w-10/12">
              <TabsList className="grid w-full grid-cols-2" dir="rtl">
                <TabsTrigger value="تسجيل الدخول">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="إشتراك">إشتراك</TabsTrigger>
              </TabsList>
              {/* login tab */}
              <TabsContent value="تسجيل الدخول">
                <LoginForm />
              </TabsContent>

              {/* register tab */}
              <TabsContent value="إشتراك">
                <RegisterForm />
              </TabsContent>
            </Tabs>
            <LoginWithSocial />
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
