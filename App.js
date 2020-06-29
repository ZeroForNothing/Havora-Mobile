import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import signInActivity from './screens/signInActivity';
import registerActivity from './screens/registerActivity';

const App = createSwitchNavigator({
  signInActivity: { screen: signInActivity },
  registerActivity: {screen: registerActivity},
});

export default createAppContainer(App);