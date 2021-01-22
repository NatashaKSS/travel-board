import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { RootState } from 'lib/redux/root/types/rootRedux.types';
import { setFromStation, setToStation } from 'ui/travel/ducks/travelSlice';
import { retrieveStationNames } from 'data/stations/readers/retrieveStationsFromJson';
import StationInputSection from './StationInputSection';

const allStationNames = retrieveStationNames();

const mapStateToProps = (state: RootState) => {
  return {
    stations: allStationNames,
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
