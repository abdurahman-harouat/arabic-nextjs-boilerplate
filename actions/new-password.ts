'use server';

import { NewPasswordSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

import { getPasswordResetTokenByToken } from '../data/password-reset-token';
import { getUserByEmail } from '../data/user';
import { db } from '../lib/db';

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'رمز التحقق غير موجود' };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'يجب ملئ البيانات بشكل صحيح' };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: 'رمز التحقق غير صحيح' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'إنقضى وقت رمز التحقق' };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'هذا البريد غير موجود' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'تم تجديد كلمة المرور' };
};
