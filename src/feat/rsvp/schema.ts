import { z } from 'zod';

export const rsvpSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi').max(100, 'Nama maksimal 100 karakter'),
  present: z.boolean(),
  notes: z.string().max(500, 'Ucapan maksimal 500 karakter').optional(),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;
