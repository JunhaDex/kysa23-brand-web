export type ThemeType = 'light' | 'dark';
export type LayoutType = 'mo' | 'tb' | 'pc';
export type RegisterStage = 'auth' | 'form';
export type ToastType = 'success' | 'warning' | 'danger';

export interface ToastItem {
  type: ToastType;
  message: string;
}
