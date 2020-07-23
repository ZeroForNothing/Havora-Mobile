import {createSwitchNavigator, createAppContainer} from "react-navigation";

import signin from "./Login/signin";
//import signup from "./Login/signup";
import home from "./Main/home";

const App = createSwitchNavigator({
  signin: {
    screen: signin
  },
  // signup: {
  //   screen: signup
  // },
  home: {
    screen: home
  }
});

export default createAppContainer(App);
