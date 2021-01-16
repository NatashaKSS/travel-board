import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from 'lib/redux/root';
import CustomThemeProvider from 'lib/ui/theme/components/CustomThemeProvider/CustomThemeProvider';

interface ProvidersWrapperProps {
  children: React.ReactNode;
}

/**
 * Wraps any React component with these context providers, allowing it to access any theme property within its context.
 *
 * Providers included:
 *   1.) Material UI Theme Provider
 *
 * @param {React.ReactNode} children  Any React component
 * @returns {React.ReactNode}  The input React component wrapped with these providers
 */
export const ProviderWrapper = ({ children }: ProvidersWrapperProps) => {
  return (
    <Provider store={rootStore}>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </Provider>
  );
};
