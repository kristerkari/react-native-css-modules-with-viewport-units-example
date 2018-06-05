import React, { PureComponent } from "react";
import { OrientationChangeProvider } from "react-native-orientation-change-provider";
import { ViewportUnits } from "./ViewportUnits";

export class App extends PureComponent {
  render() {
    return (
      <OrientationChangeProvider>
        <ViewportUnits />
      </OrientationChangeProvider>
    );
  }
}
