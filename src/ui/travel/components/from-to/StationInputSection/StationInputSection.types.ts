export interface StationInputSectionProps {
  fromStations: string[];
  toStations: string[];
  onSelectFrom: (stationName: string | null) => void;
  onSelectTo: (stationName: string | null) => void;
}
