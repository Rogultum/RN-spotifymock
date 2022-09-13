import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import SignStackNavigation from "./src/navigation/SignStackNavigation/SignStackNavigation";

import { store } from "./src/redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SignStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
