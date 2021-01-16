import { configure } from 'enzyme';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

// Enzyme 3 needs to be installed with a configured adapter that
// corresponds to the React version we're using for unit tests to work.
// Refer to documentation: https://airbnb.io/enzyme/docs/installation/index.html
configure({ adapter: new EnzymeReactAdapter() });
