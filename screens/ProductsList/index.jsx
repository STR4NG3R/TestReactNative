import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { ScreensNavigation } from "../MainScreen"
import { styles } from "../../styles/Posts";
import { Header } from "../../components/Header"

let PRODUCTS = [
  {
    id: 0,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
  {
    id: 1,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
  {
    id: 2,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
  {
    id: 3,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
  {
    id: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
  {
    id: 5,
    image: "https://images-na.ssl-images-amazon.com/images/I/41C3fVGY65L._AC_SL1000_.jpg",
    title: "Ejemplo 1",
    price: 100.0,
    description: "Example",
  },
];

const POST_GUTTER_WIDTH = 2;

export const ProductsList = ({ navigation }) => {
  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;

  return (

    <SafeAreaView style={styles.wrapper}>
      <Header />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Punto de Ventas</Text>

        <View style={styles.products}>
          {PRODUCTS.map((product, index) => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.push(ScreensNavigation["DETAIL_PRODUCT"], {
                  product,
                })
              }
              style={{
                width: imageWidth,
              }}
            >
              <SharedElement id={`product.${product.id}.image`}>
                <Image
                  source={{ uri: product.image }}
                  style={{
                    height: 180,
                    width: imageWidth,
                    marginRight: index % 2 === 1 ? 0 : POST_GUTTER_WIDTH,
                    marginLeft: index % 2 === 1 ? POST_GUTTER_WIDTH : 0,
                  }}
                />
              </SharedElement>

              <View style={styles.productTexts}>
                <Text numberOfLines={1} style={styles.productHeader}>
                  €{product.price} · {product.title}
                </Text>

                <Text numberOfLines={1} style={styles.productDescription}>
                  {product.description}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};
