'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { CiSquareChevLeft } from 'react-icons/ci';

import { buttonVariants } from '@/components/ui/button';
import Logo from '@/components/Logo';
import LogoDark from '@/components/Logo_dark';

export default function Error() {
  const { theme } = useTheme();
  const [logo, setLogo] = useState(<Logo />); // default to light logo

  useEffect(() => {
    setLogo(theme === 'dark' ? <LogoDark /> : <Logo />);
  }, [theme]);
  console.log(theme);
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-screen-2xl flex-row flex-wrap items-center justify-center gap-0 px-4 sm:gap-20 md:px-8">
        <div className="flex flex-col items-center gap-4">
          {/* LOGO */}
          {logo}
          <h1 className="mb-2 text-center text-7xl font-bold text-gray-800 md:text-9xl">
            404
          </h1>

          <div className="flex flex-col items-center">
            <p className="mb-4 text-sm font-semibold uppercase text-rose-500 md:text-base">
              مشكلة
            </p>
            <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
              يبدو أن هنالك مشكلة غير متوقعة
            </p>
          </div>
        </div>

        {/* shield */}
        <Image
          src="/circle-dynamic-color.svg"
          alt="صورة درع"
          width={300}
          height={300}
        />
      </div>
      <Link
        href="/"
        className={`flex w-48 flex-row gap-2 ${buttonVariants({
          variant: 'secondary',
        })}`}
      >
        الرئيسية <CiSquareChevLeft />
      </Link>
    </div>
  );
}
