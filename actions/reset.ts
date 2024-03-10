'use server';

import { ResetSchema } from '@/schemas';
import * as z from 'zod';

import { getUserByEmail } from '../data/user';
import { sendPasswordResetEmail } from '../lib/mail';
import { generatePasswordResetToken } from '../lib/tokens';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'البريد الإلكتروني غير صحيح' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'هذا البريد غير موجود' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return { success: 'تم إرسال بريد إلكتروني يرجى التحقق' };
};
