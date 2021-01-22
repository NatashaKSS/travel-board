import { connect } from 'react-redux';
import { RootState } from 'lib/redux/root/types/rootRedux.types';
import { retrieveStationNames } from 'data/stations/readers/retrieveStationsFromJson';
import StationInputSection from './StationInputSection';

const allStationNames = retrieveStationNames();

const mapStateToProps = (state: RootState) => {
  return {
    stations: allStationNames,
  };
};

export default connect(mapStateToProps)(StationInputSection);
