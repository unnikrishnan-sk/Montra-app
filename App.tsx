/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import Router from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      {/* // <SafeAreaView> */}
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor='transparent'
        />

        <Router />
        {/* // </SafeAreaView> */}
      </Provider>
    </>
  );
}

export default App;
