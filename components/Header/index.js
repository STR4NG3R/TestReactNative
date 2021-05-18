import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { STYLE } from "../.../../../constants";
export const Header = () => {
  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: 10 * 2,
          justifyContent: "center",
        }}
      >
        <Image
          // source={}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "70%",
            height: "100%",
            backgroundColor: "gray",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text style={{ ...STYLE.h2 }}>Location</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ width: 50, paddingRight: 10 * 2, justifyContent: "center" }}
      >
        <Image
          // source={}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};
