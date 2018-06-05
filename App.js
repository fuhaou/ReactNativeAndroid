import React, { Component } from 'react';
import {AppNavigator} from "./src/configs/routes";
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
};