export interface StationInputSectionProps {
  stations: string[];
  onSelectFrom: (stationName: string | null) => void;
  onSelectTo: (stationName: string | null) => void;
}
