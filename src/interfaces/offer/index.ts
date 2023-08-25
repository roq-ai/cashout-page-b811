import { ReportInterface } from 'interfaces/report';
import { ScreenshotInterface } from 'interfaces/screenshot';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  title: string;
  description: string;
  start_date: any;
  end_date: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  report?: ReportInterface[];
  screenshot?: ScreenshotInterface[];
  organization?: OrganizationInterface;
  _count?: {
    report?: number;
    screenshot?: number;
  };
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
}
