import { StackNavigator } from "react-navigation";
import { MainScreen, ProfileScreen, PressMeScreen } from "./screens";

export default (App = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  PressMe: { screen: PressMeScreen }
}));
