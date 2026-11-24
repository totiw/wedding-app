import axios from 'axios';
import type { RsvpFormValues } from './schema';
import { weddingApi } from '@/lib/axios';

interface RsvpsParams {
  page?: string;
  limit?: string;
}

export const getRsvps = async ({ page = '1', limit = '10' }: RsvpsParams = {}) => {
  try {
    const response = await weddingApi.get('/rsvps', { params: { page, limit } });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createRsvp = async (payload: RsvpFormValues) => {
  try {
    await weddingApi.post('/rsvps', payload);
    return { success: true, message: 'Berhasil membuat ucapan!' };
  } catch (error) {
    return {
      success: false,
      message:
        axios.isAxiosError(error) && error.message
          ? error.message
          : error instanceof Error
            ? error.message
            : 'Gagal membuat rsvp',
    };
  }
};
