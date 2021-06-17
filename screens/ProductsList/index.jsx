import React from "react";
import { SHADOW } from "../../constants";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { ScreensNavigation } from "../MainScreen";
import { styles } from "../../styles/Posts";
import { Header } from "../../components/Header";
import { useGetStore } from "../../hooks/useGet";
import { getAllProducts } from "../../services/products";
import { initProducts } from "../../reducers/products";
import { Categories } from "../../components/Categories";
import { FlatList } from "react-native-gesture-handler";
import { getAllCategories } from "../../services/categories";
import { useSelector } from "react-redux";

const POST_GUTTER_WIDTH = 2;

export const ProductsList = ({ navigation }) => {
  const { loading, error, data } = useGetStore(
    getAllProducts,
    initProducts,
    (state) => state.products
  );
  const getCategorieById = (id) => {
    // const categories = useSelector((state) => state.categories);
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
      <View>
        <SharedElement id={`product.${item.id}.image`}>
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
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
          ...SHADOW,
        }}
      >
        <Text style={{ textAlign: "center" }} h4>
          {item.title}
        </Text>
      </View>
      {/* <Text h1>{item.title}</Text> */}
      {/* <View style={{ marginTop: 10, flexDirection: "row" }}> */}
      {/* <Image */}
      {/*   source={{ uri: item.image }} */}
      {/*   style={{ */}
      {/*     width: 20, */}
      {/*     height: 20, */}
      {/*     tintColor: "orange", */}
      {/*     marginRight: 10, */}
      {/*   }} */}
      {/* /> */}
      {/* {/1* </SharedElement> *1/} */}
      {/* </View> */}
      {/* <View style={{ marginLeft: 10, flexDirection: "row" }}> */}
      {/*   {item.categorie.map((id) => ( */}
      {/*     <Text>{getCategorieById(id)}</Text> */}
      {/*   ))} */}
      {/* </View> */}
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
                paddingBottom: 30,
              }}
            />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/* <Pressable */
/*   key={product.id} */
/*   onPress={() => */
/*     navigation.push(ScreensNavigation["DETAIL_PRODUCT"], { */
/*       product, */
/*     }) */
/*   } */
/*   style={{ */
/*     width: imageWidth, */
/*   }} */
/* > */
/*   <View style={styles.productTexts}> */
/*     <Text numberOfLines={1} style={styles.productHeader}> */
/*       ${product.price} · {product.title} */
/*     </Text> */
/*     <Text numberOfLines={1} style={styles.productDescription}> */
/*       {product.description} */
/*     </Text> */
/*   </View> */
/* </Pressable> */
