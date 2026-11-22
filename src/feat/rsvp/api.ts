import axios from 'axios';

interface RsvpsParams {
  page?: string;
  limit?: string;
}

export const getRsvps = async ({ page = '1', limit = '10' }: RsvpsParams = {}) => {
  try {
    const response = await axios.get(
      `https://api-wedding-app.vercel.app/api/rsvps?page=${page}&limit=${limit}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
