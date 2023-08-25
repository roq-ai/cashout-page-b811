import { UserInterface } from 'interfaces/user';
import { OfferInterface } from 'interfaces/offer';
import { GetQueryInterface } from 'interfaces';

export interface ReportInterface {
  id?: string;
  report_date: any;
  user_id: string;
  offer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  offer?: OfferInterface;
  _count?: {};
}

export interface ReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  offer_id?: string;
}
