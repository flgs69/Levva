import { ReactNode, CSSProperties } from 'react';

export interface IconButtonProps {
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  label?: string;
  onClick?: () => void;
  style?: CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
