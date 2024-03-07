import type { Metadata } from 'next';

import '@/styles/globals.css';

import { auth } from '@/../auth';
import Provider from '@/trpc/Provider';
import { SessionProvider } from 'next-auth/react';

import { el_messiri } from '@/config/fonts';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/site/theme-provider';

export const metadata: Metadata = {
  title: 'نمودج نكست جس',
  description: 'نمودج جاهز لإنشاء مواقع كاملة بإستخدام نكست جس',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <>
      <SessionProvider session={session}>
        <html lang="en" dir="rtl">
          <body
            className={cn(el_messiri.className, 'flex flex-col min-h-screen')}
          >
            <ThemeProvider attribute="class" defaultTheme="light">
              <Provider>
                <Navbar />
                <main className="flex flex-col flex-1">{children}</main>
                <Footer />
              </Provider>
            </ThemeProvider>
          </body>
        </html>
      </SessionProvider>
    </>
  );
}
