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
import { ScreensNavigation } from "../MainScreen";
import { styles } from "../../styles/Posts";
// import { Header } from "../../components/Header";
import { useGetStore } from "../../hooks/useGet";
import { getAllProducts } from "../../services/products";
import { initProducts } from "../../reducers/products";
import { Categories } from "../../components/Categories";

const POST_GUTTER_WIDTH = 2;

export const ProductsList = ({ navigation }) => {
  const { loading, error, data } = useGetStore(
    getAllProducts,
    initProducts,
    (state) => state.products
  );

  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <Header /> */}
      <Categories />
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Punto de Ventas</Text>

        <View style={styles.products}>
          {!loading && !error && typeof data !== "undefined"
            ? data.map((product, index) => (
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
                      ${product.price} · {product.title}
                    </Text>

                    <Text numberOfLines={1} style={styles.productDescription}>
                      {product.description}
                    </Text>
                  </View>
                </Pressable>
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
