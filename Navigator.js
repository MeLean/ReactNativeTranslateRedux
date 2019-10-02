import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";

const ScreenNavigator = createStackNavigator(
  {
    start: StartScreen,
    home: HomeScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#FA0"
      }
    }
  }
);

export default createAppContainer(ScreenNavigator);
