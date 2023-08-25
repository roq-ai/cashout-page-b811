import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CashoutInterface {
  id?: string;
  cashout_date: any;
  amount: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CashoutGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
