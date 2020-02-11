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
  Platform
} from 'react-native';
import theme from './src/components/Theming'
import { ApplicationProvider, Layout, Text, ThemeProvider} from 'react-native-ui-kitten';
import {default as customMappingAndroid}  from './custom-mapping.android.json';
import {default as customMappingIos} from './custom-mapping.ios.json';
import IndexRouting from './src/screens/';

// console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='rgb(240,240,240)' />
      <ApplicationProvider
        mapping={ Platform.OS === 'ios' ? customMappingIos : customMappingAndroid}
        theme={theme}>
          <IndexRouting></IndexRouting>
      </ApplicationProvider>
    </>
  );
};


export default App;
