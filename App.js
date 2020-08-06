import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SignInScreen from "./Login/signinScreen";
import SignUpScreen from "./Login/signupScreen";
import MainScreen from "./Main/mainScreen";

const SignInStack = createStackNavigator({ SignInScreen: SignInScreen });
const SignUpStack = createStackNavigator({ SignUpScreen: SignUpScreen });
const MainStack = createStackNavigator({ MainScreen: MainScreen });

const App = createSwitchNavigator({
  SignInPage: SignInStack,
  SignUpPage : SignUpStack,
  MainPage: MainStack
},
        {
          initialRouteName: 'SignInPage',
        }
);

export default createAppContainer(App );
