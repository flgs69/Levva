import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  children?: ReactNode;
  flat?: boolean;
  padding?: string;
  style?: CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
