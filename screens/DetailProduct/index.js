import React, { useEffect, useRef } from "react";
import { Text, View, Animated, Button, Image } from "react-native";
import {ChangeQuantity} from "../../components/ChangeQuantity"
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { useDispatch, useSelector } from "react-redux";
import { styles, SPACING } from "../../styles/Posts";

export const DetailProduct = ({ route, navigation }) => {
  const safeInsets = useSafeAreaInsets();
  const { item } = route.params;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const dispatch = useDispatch()
  const basket = useSelector((state) => state.basket.products);

  const ifIdInBasket = (id) => basket[id]

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "white", ...styles.wrapper }}>
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
          <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          >
            {item.image.map((uri, idx) => (
              <View key={idx} style={{ alignItems: "center" }}>
                <View style={{ height: 300 }}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: uri }}
                    style={{ width: 300, height: "100%" }}
                  />
                </View>
              </View>
            ))}
          </Animated.ScrollView>
        </SharedElement>

        <ChangeQuantity
          dispatch={dispatch}
          basket={basket}
          ifIdInBasket={ifIdInBasket}
          item={item}
        />



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
          <Animated.Text
            style={{
              opacity,
              fontSize: 17,
            }}
          >
            {item.shortDescription}
          </Animated.Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
