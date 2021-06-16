import React from "react";
import { MainScreen } from "./screens/MainScreen";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { storeProducts } from "./store/products";

enableScreens();

export default function App() {
  return (
    <Provider store={storeProducts}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
