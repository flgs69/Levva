export interface BadgeProps {
  tone?: 'neutral' | 'coral' | 'success' | 'warning' | 'danger' | 'info';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
