import { AppRegistry } from "react-native";
import { App } from "./src/App";

AppRegistry.registerComponent("CSSViewportUnitsDemo", () => App);
AppRegistry.runApplication("CSSViewportUnitsDemo", {
  rootTag: document.getElementById("react-app")
});

if (module.hot) {
  module.hot.accept();
}
