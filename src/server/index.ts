import { router } from './trpc';

export const appRouter = router({
  //  ------ get request example --------
  // getWriteups: publicProcedure.query(async () => {
  //   const writeups = await db.writeUp.findMany({
  //     orderBy: { updatedAt: 'desc' },
  //   });
  //   return writeups;
  // }),
  // ----- get by id example ----------
  // getWriteupByID: publicProcedure
  //   .input(
  //     z.object({
  //       id: z.string(),
  //     })
  //   )
  //   .query(async ({ input }) => {
  //     const writeup = await db.writeUp.findUnique({ where: { id: input.id } });
  //     return writeup;
  //   }),
  // ------- update only if admin example --------
  // updateSettings: publicProcedure
  //   .input(settingsSchema)
  //   .mutation(async ({ input }) => {
  //     const isAdmin = (await currentRole()) === 'ADMIN';
  //     if (!isAdmin) {
  //       return 'هذه البيانات مسموح بها للآدمين فقط';
  //     }
  //     const existingSettings = await db.settings.findFirst();
  //     if (existingSettings) {
  //       const updatedSettings = await db.settings.update({
  //         where: { id: existingSettings.id },
  //         data: input,
  //       });
  //       return updatedSettings;
  //     } else {
  //       const newSettings = await db.settings.create({
  //         data: input,
  //       });
  //       return newSettings;
  //     }
  //   }),
});

export type AppRouter = typeof appRouter;
