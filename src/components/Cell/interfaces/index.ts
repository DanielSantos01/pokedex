export interface CellProps {
  content: string;
  selected?: boolean;
  callback: (label: string) => void;
}
