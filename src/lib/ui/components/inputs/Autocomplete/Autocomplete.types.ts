export interface AutocompleteProps {
  options: string[];
  label?: string;
  value?: string | null;
  disableClearable?: boolean;
  onSelect: (selectedValue: string | null) => void;
}
