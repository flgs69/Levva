export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
}
export function Tag(props: TagProps): JSX.Element;
