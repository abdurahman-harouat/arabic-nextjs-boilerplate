import { createUploadthing } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

import { currentRole, currentUser } from '../../../../lib/auth';

import type { FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const ourFileRouter = {
  // uploading image with max file size 4 mb and one maximum file
  imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // get current user
      const user = await currentUser();

      // get current admin
      const isAdmin = (await currentRole()) === 'ADMIN';

      // if not admin throw error
      if (!isAdmin) throw new UploadThingError('Unauthorized');

      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
