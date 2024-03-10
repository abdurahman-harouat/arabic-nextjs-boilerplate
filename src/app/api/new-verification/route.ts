import { NextRequest, NextResponse } from 'next/server';

import { getUserByEmail } from '../../../../data/user';
import { getVerificationTokenByToken } from '../../../../data/verification-token';
import { db } from '../../../../lib/db';

export async function POST(req: NextRequest, res: NextResponse) {
  const token = await req.json();
  const result = await newVerification(token);

  if (result.error) {
    return NextResponse.json({ message: result.error }, { status: 400 });
  }

  return NextResponse.json({ message: result.success }, { status: 200 });
}

async function newVerification(token: string) {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: 'رمز التحقق غير موجود' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'إنتهت صلاحية رمز التحقق يرجى إعادة المحاولة' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'هذا البريد غير مسجل' };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'تم التحقق من البريد الإلكتروني بنجاح' };
}
