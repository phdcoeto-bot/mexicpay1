
export type ViewState = 'landing' | 'dashboard';
export type Language = 'es' | 'en' | 'jp' | 'kr';

export interface DashboardFormData {
  fullName: string;
  shippingAddress: string;
  city: string;
  zipCode: string;
  phoneModel: string;
  travelDate: string;
}
