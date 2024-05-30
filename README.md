<p align="right">هذا نمودج جاهز للبدأ بإنشاء موقع كامل "fullstack" بأقصى سرعة ممكنة بإستخدام Nextjs 🚀 </p>

<p align="right"><h3>الأدوات المستخدمة 🛠️</h3></p>

<div align="right">
    <ul align="right">
<p align="right">- NextJs ^14.1.0</p>
<p align="right">- Typescript ^5</p>
<p align="right">- ESlint ^8</p>
<p align="right">- TailwindCSS ^3.3.0</p>
<p align="right">- `src/` directory</p>
<p align="right">- App Router</p>
<p align="right">- alias `@/`</p>
<p align="right">- Prisma ^5.10.2 `+` @prisma/client ^5.10.2</p>
<p align="right">- mongodb</p>
<p align="right">- mongodb</p>
<p align="right">- AuthJs v5</p>
<p align="right">- next-themes for dark mode</p>
<p align="right">- `shadcn` : New York - yellow - radius 1.0</p>
<p align="right">- react-icons + lucide-react</p>
<p align="right">- bcryptjs</p>
<p align="right">- auth providers : google / github / credential provider</p>
<p align="right">- Prettier</p>
<p align="right">- TRPC</p>
<p align="right">- zod `+` react-hook-form `+` @hookform/resolvers</p>
<p align="right">- uploadthing</p>
<p align="right">- resend</p>
</ul>
</div>

<p align="right"><h3>⛵ البدأ بإستخدامه</h3></p>

<p align="right">في البداية قم بتغيير الملف `.env.example` إلى `.env` فقط</p>

<p align="right">بعد ذلك قم بتشغيل الأوامر التالية في terminal</p>

```bash
npm i
npx prisma generate
npm run dev
```

<p align="right">بعد ذلك قم بفتح http://localhost:3000 </p>

<p align="right"><h3>🖌️ الخطوط</h3></p>

<p align="right">يمكن إضافة الخطوط في ملف `src/config/fonts.ts`</p>

<p align="right">و تعديل الخط العام للموقع في ملف `src/app/layout.tsx` </p>

```jsx
// src/app/layout.tsx
<body className={el_messiri.className}></body>
```
