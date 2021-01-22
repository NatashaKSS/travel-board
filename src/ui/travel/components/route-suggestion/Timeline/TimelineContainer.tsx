import { connect } from 'react-redux';
import { RootState } from 'lib/redux/root/types/rootRedux.types';
import Timeline from './Timeline';

const mapStateToProps = (state: RootState) => {
  return {
    path: [],
  };
};

export default connect(mapStateToProps)(Timeline);
