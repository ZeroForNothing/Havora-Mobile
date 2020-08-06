import {createSwitchNavigator, createAppContainer} from "react-navigation";
import signinScreen from "./Login/signinScreen";
import signupScreen from "./Login/signupScreen";
import mainScreen from "./Main/mainScreen";

const App = createSwitchNavigator({
  signinScreen: {
    screen: signinScreen
  },
  mainScreen: {
    screen: mainScreen
  },
  signupScreen:{
    screen : signupScreen
  }
},
        {
          initialRouteName: 'signinScreen',
        }
);

export default createAppContainer(App );
