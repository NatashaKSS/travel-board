import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootStore } from 'lib/redux/root';
import CustomThemeProvider from 'lib/ui/theme/components/CustomThemeProvider/CustomThemeProvider';
import Application from 'ui/app/components/Application/Application';

// ==================
// ROOT-LEVEL CSS
// ==================

import './index.css';

// ==================
// ROOT-LEVEL RENDER
// ==================

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <CustomThemeProvider>
        <Application />
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
