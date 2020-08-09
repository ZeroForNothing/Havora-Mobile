import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SignInScreen from "./Login/signinScreen";
import SignUpScreen from "./Login/signupScreen";
import MainScreen from "./Main/mainScreen";

import ChatSubScreen from './Main/chatSubScreen';

const SignInStack = createStackNavigator({ SignInScreen: SignInScreen} , { headerMode: 'none' });
const SignUpStack = createStackNavigator({ SignUpScreen: SignUpScreen } , { headerMode: 'none' });
const MainStack = createStackNavigator({ MainScreen: MainScreen } , { headerMode: 'none' });

const ChatSubStack = createStackNavigator({ ChatSubScreen: ChatSubScreen} , { headerMode: 'none' });

const App = createSwitchNavigator({
  SignInPage: SignInStack,
  SignUpPage : SignUpStack,
  ChatSubPage : ChatSubStack,
  MainPage: MainStack,
},
  {
    initialRouteName: 'SignInPage',
  }
);

export default createAppContainer(App );
