import {createSwitchNavigator, createAppContainer} from "react-navigation";
import signin from "./Login/signin";
import mainScreen from "./Main/mainScreen";

const App = createSwitchNavigator({
  signin: {
    screen: signin
  },
  mainScreen: {
    screen: mainScreen
  }
});

export default createAppContainer(App);
