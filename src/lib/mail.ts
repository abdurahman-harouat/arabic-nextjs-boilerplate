import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: process.env.TWOFA_SENDER as string,
    to: email,
    subject: 'رمز التحقق الثنائي',
    html: `<p>رمز التحقق الثنائي الخاص بك: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: process.env.RESET_SENDER as string,
    to: email,
    subject: 'تجديد كلمة المرور',
    html: `<p>إضغط <a href="${resetLink}">هنا</a> لتجديد كلمة المرور</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: process.env.VERIFICATION_SENDER as string,
    to: email,
    subject: 'تأكيد البريد الإلكتروني',
    html: `<p dir="rtl">إضغط <a href="${confirmLink}">هنا</a>لتأكيد البريد الإلكتروني</p>`,
  });
};
