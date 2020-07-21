import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import signinActivity from './screens/singinActivity';
import registerActivity from './screens/registerActivity';

const App = createSwitchNavigator({
  signinActivity: { screen: signinActivity },
  registerActivity: {screen: registerActivity},
});

export default createAppContainer(App);