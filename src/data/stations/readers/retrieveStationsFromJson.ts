import { StationsJson as StationsJsonInterface } from '../types/stations.types';
import StationsJson from '../datasets/stations.json';

const retrieveStationsFromJson = (): StationsJsonInterface => {
  return StationsJson;
};

export { retrieveStationsFromJson };
