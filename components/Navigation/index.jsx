import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import Svg, { Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


const Tab = createBottomTabNavigator()

const TabBarCustomButtom = ({ accessiblityState, children, onPress }) => {
  return accessiblityState.selected ?
    (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: "white" }} />
          <Svg width={75}
            height={61}
            viewBox="0 0 75 61"
          >
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
            backgroundColor: "white"
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>

    ) :
    (
      <TouchableOpacity
        style={{ flex: 1, height: 60, backgroundColor: "white" }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    )
}


export const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (<Image
            source={{ uri: "" }}
            width={25}
            height={25}
            tintColor={focused ? "white" : "orange"}
          />
          ),
          TabBarButton: (props) => (
            <TabBarCustomButtom
              {...props}
            />
          )
        }
        }
      />
    </Tab.Navigator>
  )
}
