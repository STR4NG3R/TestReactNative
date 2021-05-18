import React from "react";
import { STYLE } from "../../constants";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Animated,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { ScreensNavigation } from "../../navigator/MainNavigator";
import { styles } from "../../styles/Posts";
import { Header } from "../../components/Header";
import { useGetStore } from "../../hooks/useGet";
import { getAllProducts } from "../../services/products";
import { initProducts } from "../../reducers/products";
import { Categories } from "../../components/Categories";
import { FlatList } from "react-native-gesture-handler";

export const ProductsList = ({ navigation }) => {
  const { loading, error, data } = useGetStore(
    getAllProducts,
    initProducts,
    (state) => state.products
  );
  const getCategorieById = (id) => {
    // return categories.find((categorie) => categorie.id === id).description;
    return "Test";
  };
  const renderItem = ({ item }) => (
    <Pressable
      style={{
        marginBottom: 10 * 2,
      }}
      onPress={() =>
        navigation.push(ScreensNavigation["DETAIL_PRODUCT"], {
          item,
        })
      }
    >
      <View style={{ backgroundColor: "white", borderRadius: 10 }}>
        <View>
          <SharedElement id={`product.${item.id}.image`}>
            <Image
              source={{ uri: item.image[0] }}
              resizeMode="contain"
              style={{
                width: "100%",
                height: 200,
              }}
            />
          </SharedElement>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 50,
            width: 100,
            backgroundColor: "white",
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: "center",
            alignContent: "center",
            ...STYLE.shadow,
          }}
        >
          <Text style={{ textAlign: "center", ...STYLE.h4 }}>{item.title}</Text>
        </View>
      </View>
      <Text style={{ ...STYLE.h3 }}>{item.description}</Text>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          marginLeft: 10,
        }}
      >
        {item.categorie.map((id) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...STYLE.h4 }}>{getCategorieById(id)}</Text>
            <Text style={{ ...STYLE.h4 }}> . </Text>
          </View>
        ))}
        <Text style={{ ...STYLE.h4 }}>$ {item.price}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <Categories />
      <ScrollView style={styles.wrapper}>
        <View style={styles.products}>
          {!loading && !error ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingHorizontal: 10 * 2,
                paddingBottom: 60,
              }}
            />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
