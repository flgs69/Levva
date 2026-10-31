export interface SwitchProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}
export function Switch(props: SwitchProps): JSX.Element;
