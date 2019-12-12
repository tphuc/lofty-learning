/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import theme from './src/components/Theming'
import { ApplicationProvider, Layout, Text, ThemeProvider } from 'react-native-ui-kitten';
import {default as customMapping}  from './custom-mapping.json';
import IndexRouting from './src/screens/';

// console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='rgb(240,240,240)' />
      <ApplicationProvider
        mapping={customMapping}
        theme={theme}>
          <IndexRouting></IndexRouting>
      </ApplicationProvider>
    </>
  );
};


export default App;
