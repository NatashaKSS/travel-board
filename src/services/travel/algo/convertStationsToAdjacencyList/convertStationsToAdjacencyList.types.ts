import { Station } from 'services/travel/models/stations.types';

export interface AdjacentStations {
  [stationName: string]: Station[];
}

export interface MapOfStationPositionPerLine {
  [line: string]: {
    [position: number]: Station;
  };
}

export interface MapOfFinalStationPerLine {
  [stationName: string]: number;
}
