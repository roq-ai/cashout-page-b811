import { OfferInterface } from 'interfaces/offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ScreenshotInterface {
  id?: string;
  file_path: string;
  offer_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  offer?: OfferInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ScreenshotGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_path?: string;
  offer_id?: string;
  user_id?: string;
}
