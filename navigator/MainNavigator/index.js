import React from "react";
import { ProductsList } from "../../screens/ProductsList";
import { DetailProduct } from "../../screens/DetailProduct";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {Payment} from "../../screens/Payment"
import { BasketList } from "../../screens/BasketList";
const Stack = createSharedElementStackNavigator();

export const ScreensNavigation = {
  LIST_PRODUCTS: "List",
  LIST_BASKET: "Basket",
  DETAIL_PRODUCT: "Detail",
  PAYMENT: "Payment"
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
          name={ScreensNavigation["LIST_BASKET"]}
          component={BasketList}
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

export const BasketNavigator = () => {
  return(
    <Stack.Navigator
      initialRouteName={ScreensNavigation["LIST_BASKET"]}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
          name={ScreensNavigation["LIST_BASKET"]}
          component={BasketList}
        />

      <Stack.Screen
        name={ScreensNavigation["DETAIL_PRODUCT"]}
        component={DetailProduct}
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [`product.${item.id}.image`];
        }}
      />

      <Stack.Screen
          name={ScreensNavigation["PAYMENT"]}
          component={Payment}
        />
      
    </Stack.Navigator>

  )
}
