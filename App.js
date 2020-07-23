import {createSwitchNavigator, createAppContainer} from "react-navigation";

import signinActivity from "./screens/singinActivity";
import registerActivity from "./screens/registerActivity";
import registerActivity from "./Home/home";

const App = createSwitchNavigator({
  signinActivity: {screen: signinActivity},
  registerActivity: {screen: registerActivity},
  home: {screen: home}
});

export default createAppContainer(App);
