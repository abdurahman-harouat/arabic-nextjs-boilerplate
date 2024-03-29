import { redirect } from 'next/navigation';

import { auth } from '../../../auth';

export default async function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) {
    redirect('/dashboard');
  }
  return <>{children}</>;
}
