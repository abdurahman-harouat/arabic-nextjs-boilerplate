import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .refine((value) => value !== '', {
      message: 'يجب ملئ حقل البريد الإلكتروني',
      // Email field is required
    })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'بريدك الإلكتروني غير صحيح',
      // Email format is incorrect
    }),
  password: z.string().refine((value) => value !== '', {
    message: 'يجب إدخال كلمة المرور',
    // Password is required
  }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .refine((value) => value !== '', {
      message: 'يجب ملئ حقل البريد الإلكتروني',
      // Email field is required
    })
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), {
      message: 'بريدك الإلكتروني غير صحيح',
      // Email format is incorrect
    }),
  password: z.string().min(6, {
    message: 'يجب إدخال 6 أحرف أو أرقام على الأقل',
    // Password should be at least 6 characters
  }),
  name: z.string().min(1, {
    message: 'يجب ملئ حقل الإسم',
    // Name is required
  }),
});
