import React from "react";
import { ProductsList } from "../../screens/ProductsList";
import { DetailProduct } from "../../screens/DetailProduct";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
const Stack = createSharedElementStackNavigator();

export const ScreensNavigation = {
  LIST_PRODUCTS: "List",
  DETAIL_PRODUCT: "Detail",
};

export const MainNavigator = () => {
  return (
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
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [`product.${item.id}.image`];
        }}
      />
    </Stack.Navigator>
  );
};
