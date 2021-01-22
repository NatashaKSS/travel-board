import { connect } from 'react-redux';
import { RootState } from 'lib/redux/root/types/rootRedux.types';
import { Station } from 'services/travel/models/stations.types';
import { mapShortestRoute } from 'services/travel/mapShortestRoute/mapShortestRoute';
import TimelineSection from './TimelineSection';

const mapStateToProps = (state: RootState) => {
  const from = state.travel.selectedFromStation;
  const to = state.travel.selectedToStation;
  let bestRoute: Station[] = [];

  if (from && to && from !== to) {
    bestRoute = mapShortestRoute(from, to);
  }

  return {
    path: bestRoute,
  };
};

export default connect(mapStateToProps)(TimelineSection);
