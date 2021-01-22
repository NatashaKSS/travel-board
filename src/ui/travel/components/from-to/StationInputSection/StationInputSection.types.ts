export interface StationInputSectionProps {
  selectedFromStation: string | null;
  selectedToStation: string | null;
  fromStations: string[];
  toStations: string[];
  onSelectFrom: (stationName: string | null) => void;
  onSelectTo: (stationName: string | null) => void;
}
