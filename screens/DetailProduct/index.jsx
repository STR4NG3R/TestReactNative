import React, { useEffect, useRef } from "react";
import { Text, View, Animated, Icon, Button, Image } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { styles, SPACING } from "../../styles/Posts";

export const DetailProduct = ({ route, navigation }) => {
  const safeInsets = useSafeAreaInsets();
  const { item } = route.params;
  console.log("HELP---", item);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <Animated.View
          style={{
            opacity,
            position: "absolute",
            top: safeInsets.top + SPACING,
            left: safeInsets.left + SPACING,
            right: safeInsets.right + SPACING,
            zIndex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <Icon name="x" onPress={() => navigation.goBack()} /> */}
          {/* <Icon name="more-horizontal" /> */}
        </Animated.View>

        <SharedElement id={`product.${item.id}.image`}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </SharedElement>

        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>

          <Text style={styles.productPrice}>${item.price}</Text>

          <Button title="Contact Seller" style={styles.productContactButton} />

          <Animated.Text
            style={{
              opacity,
              fontSize: 17,
            }}
          >
            {item.description}
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
