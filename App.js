/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabNavigator from './navigation/index';
import {ImageBackground} from 'react-native'
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    )
  }
}


