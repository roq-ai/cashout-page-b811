import axios from 'axios';
import queryString from 'query-string';
import { CashoutInterface, CashoutGetQueryInterface } from 'interfaces/cashout';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCashouts = async (query?: CashoutGetQueryInterface): Promise<PaginatedInterface<CashoutInterface>> => {
  const response = await axios.get('/api/cashouts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCashout = async (cashout: CashoutInterface) => {
  const response = await axios.post('/api/cashouts', cashout);
  return response.data;
};

export const updateCashoutById = async (id: string, cashout: CashoutInterface) => {
  const response = await axios.put(`/api/cashouts/${id}`, cashout);
  return response.data;
};

export const getCashoutById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cashouts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCashoutById = async (id: string) => {
  const response = await axios.delete(`/api/cashouts/${id}`);
  return response.data;
};
