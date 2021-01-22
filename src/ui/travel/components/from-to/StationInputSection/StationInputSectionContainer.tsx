import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { RootState } from 'lib/redux/root/types/rootRedux.types';
import { setFromStation, setToStation } from 'ui/travel/ducks/travelSlice';
import { retrieveStationNames } from 'data/stations/readers/retrieveStationsFromJson';
import StationInputSection from './StationInputSection';

const allStationNames = retrieveStationNames();

const getRemainingStations = (stationName: string | null) => {
  if (stationName) {
    return allStationNames.filter((name) => name !== stationName);
  } else {
    return allStationNames;
  }
};

const mapStateToProps = (state: RootState) => {
  return {
    selectedFromStation: state.travel.selectedFromStation,
    selectedToStation: state.travel.selectedToStation,
    fromStations: getRemainingStations(state.travel.selectedToStation),
    toStations: getRemainingStations(state.travel.selectedFromStation),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onSelectFrom: (stationName: string | null) => {
      if (stationName) {
        dispatch(setFromStation(stationName));
      }
    },
    onSelectTo: (stationName: string | null) => {
      if (stationName) {
        dispatch(setToStation(stationName));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StationInputSection);
