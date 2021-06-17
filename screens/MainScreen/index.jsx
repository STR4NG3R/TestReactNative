import React from "react";
import { ProductsList } from "../ProductsList";
import { DetailProduct } from "../DetailProduct";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createSharedElementStackNavigator();

export const ScreensNavigation = {
  LIST_PRODUCTS: "List",
  DETAIL_PRODUCT: "Detail",
};

export const MainScreen = () => (
  <Stack.Navigator
    initialRouteName={ScreensNavigation["LIST_PRODUCTS"]}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name={ScreensNavigation["LIST_PRODUCTS"]}
      component={ProductsList}
    />

    <Stack.Screen
      name={ScreensNavigation["DETAIL_PRODUCT"]}
      component={DetailProduct}
      options={() => ({
        transitionSpec: {
          open: { animation: "spring", config: { duration: 1000 } },
          close: { animation: "spring", config: { duration: 1000 } },
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return { cardStyle: { opacity: progress } };
        },
      })}
      sharedElementsConfig={(route) => {
        const { product } = route.params;
        return [`product.${product.id}.image`];
      }}
    />
  </Stack.Navigator>
);
