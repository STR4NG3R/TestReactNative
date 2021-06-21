import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { BasketNavigator, MainNavigator } from "../MainNavigator";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  return accessibilityState.selected ? (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
        <View style={{ flex: 1, backgroundColor: "white" }} />
        <Svg width={75} height={61} viewBox="0 0 75 61">
          <Path
            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            fill="white"
          />
        </Svg>
        <View style={{ flex: 1, backgroundColor: "white" }} />
      </View>

      <TouchableOpacity
        style={{
          top: -22.5,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "white",
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={{ flex: 1, height: 60, backgroundColor: "white" }}
      activeOpacity={1}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        lazyLoad: true,
        style: {
          borderTopWidth: 0,
          position: "absolute",
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      {[
        {
          name: "Home",
          component: MainNavigator,
          uri: "https://image.flaticon.com/icons/png/512/1524/1524711.png",
        },
        {
          name: "Basket",
          component: BasketNavigator,
          uri: "https://image.flaticon.com/icons/png/512/60/60992.png",
        },
        {
          name: "Me",
          component: MainNavigator,
          uri: "https://image.flaticon.com/icons/png/512/74/74472.png",
        },
      ].map(({ name, uri, component }) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                // resizeMode="contain"
                source={{
                  uri: uri,
                }}
                style={{
                  tintColor: focused ? "orange" : "lightgray",
                  width: 25,
                  height: 25,
                }}
              />
            ),
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
