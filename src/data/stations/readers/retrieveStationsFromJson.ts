import { StationsJson as StationsJsonInterface } from '../types/stations.types';
import StationsJson from '../datasets/stations.json';

const retrieveStationsFromJson = (): StationsJsonInterface => {
  return StationsJson;
};

const retrieveStationNames = (): string[] => {
  return Object.keys(StationsJson);
};

export { retrieveStationsFromJson, retrieveStationNames };
