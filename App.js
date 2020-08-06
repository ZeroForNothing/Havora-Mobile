import {createSwitchNavigator, createAppContainer} from "react-navigation";
import signinScreen from "./Login/signinScreen";
import signupScreen from "./Login/signupScreen";
import mainScreen from "./Main/mainScreen";

const App = createSwitchNavigator({
  signupScreen:{
    screen : signupScreen
  },
  signinScreen: {
    screen: signinScreen
  },
  mainScreen: {
    screen: mainScreen
  }
});

export default createAppContainer(App);
