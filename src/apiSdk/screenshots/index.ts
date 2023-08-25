import axios from 'axios';
import queryString from 'query-string';
import { ScreenshotInterface, ScreenshotGetQueryInterface } from 'interfaces/screenshot';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getScreenshots = async (
  query?: ScreenshotGetQueryInterface,
): Promise<PaginatedInterface<ScreenshotInterface>> => {
  const response = await axios.get('/api/screenshots', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createScreenshot = async (screenshot: ScreenshotInterface) => {
  const response = await axios.post('/api/screenshots', screenshot);
  return response.data;
};

export const updateScreenshotById = async (id: string, screenshot: ScreenshotInterface) => {
  const response = await axios.put(`/api/screenshots/${id}`, screenshot);
  return response.data;
};

export const getScreenshotById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/screenshots/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteScreenshotById = async (id: string) => {
  const response = await axios.delete(`/api/screenshots/${id}`);
  return response.data;
};
