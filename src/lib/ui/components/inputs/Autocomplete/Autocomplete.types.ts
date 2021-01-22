export interface AutocompleteProps {
  options: string[];
  label?: string;
  disableClearable?: boolean;
  onSelect: (selectedValue: string | null) => void;
}
