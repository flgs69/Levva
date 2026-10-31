export interface ToastProps {
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
  title: string;
  description?: string;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
