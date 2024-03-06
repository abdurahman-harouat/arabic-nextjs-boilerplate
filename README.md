### This is a [Next.js](https://nextjs.org/) boilerplate :rocket:

**👉 note :** this is not an opinionated boilerplate, it's just what i use currently.

### Tech stack :computer:

- NextJs ^14.1.0
- Typescript ^5
- ESlint ^8
- TailwindCSS ^3.3.0
- `src/` directory
- App Router
- alias `@/`
- Prisma ^5.10.2 `+` @prisma/client ^5.10.2
- mongodb
- AuthJs v5
- next-themes for dark mode
- `shadcn` : New York - yellow - radius 1.0
- react-icons + lucide-react
- bcryptjs
- auth providers : google / github / credential provider
- Prettier
- TRPC
- zod `+` react-hook-form `+` @hookform/resolvers
- zustand
- uploadthing
- resend

### :sailboat: Getting Started

First, change `.env.example` to `.env.local` and change add your keys

then, run the development server:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**package manager** : npm

### website direction

I usually use this boilerplate to make arabic website and it's from right to left , you can remove `dir="rtl"` if your website is in english or other left to right websites

```jsx
// src/app/layout.tsx
<html lang="en" dir="rtl"></html>
```

### :pencil2: fonts

- I also use el_messiri font which is arabic too, so you can change it for latin text
- fonts are organized in `src/config/fonts.ts`

```jsx
// src/app/layout.tsx
<body className={el_messiri.className}></body>
```

### Schema

- schema is also in arabic and i added a comment of the translation in english
- schema is located in `src/schema/index.ts`

### TRPC

you can create trpc apis in `src/server/index.ts`

### adding loading

```
<span className="dots-flow"></span>
```

### vscode extentions

it's good to have those extensions:

- Prisma
- Thunder Client
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- PostCSS Language Support
- Material Icon Theme
- ESLint
- ES7+ React/Redux/React-Native snippets
- Error Lens
