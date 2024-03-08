<p align="right">هذا نمودج جاهز للبدأ بإنشاء موقع كامل "fullstack" بأقصى سرعة ممكنة بإستخدام Nextjs 🚀 </p>

<p align="right"><h3>الأدوات المستخدمة 🛠️</h3></p>

<ul align="right">
<li align="right"> NextJs ^14.1.0</li>
<li align="right"> Typescript ^5</li>
<li align="right"> ESlint ^8</li>
<li align="right"> TailwindCSS ^3.3.0</li>
<li align="right"> `src/` directory</li>
<li align="right"> App Router</li>
<li align="right"> alias `@/`</li>
<li align="right"> Prisma ^5.10.2 `+` @prisma/client ^5.10.2</li>
<li align="right"> mongodb</li>
<li align="right"> mongodb</li>
<li align="right"> AuthJs v5</li>
<li align="right"> next-themes for dark mode</li>
<li align="right"> `shadcn` : New York - yellow - radius 1.0</li>
<li align="right"> react-icons + lucide-react</li>
<li align="right"> bcryptjs</li>
<li align="right"> auth providers : google / github / credential provider</li>
<li align="right"> Prettier</li>
<li align="right"> TRPC</li>
<li align="right"> zod `+` react-hook-form `+` @hookform/resolvers</li>
<li align="right"> uploadthing</li>
<li align="right"> resend</li>
</ul>

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
