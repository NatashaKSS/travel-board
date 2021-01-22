import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { swapStations } from 'ui/travel/ducks/travelSlice';
import SwapButton from './SwapButton';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClickSwap: () => {
      dispatch(swapStations());
    },
  };
};

export default connect(null, mapDispatchToProps)(SwapButton);
