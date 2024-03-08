import { El_Messiri, Tajawal } from 'next/font/google';

export const el_messiri = El_Messiri({
  subsets: ['arabic'],
  display: 'swap',
});

export const tajawal = Tajawal({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '200', '300', '500', '700', '800'],
});
