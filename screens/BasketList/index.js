import React from "react";
import { STYLE } from "../../constants";
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
import { ScreensNavigation } from "../../navigator/MainNavigator";
import { styles } from "../../styles/Posts";
import { ChangeQuantity } from "../../components/ChangeQuantity";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../reducers/basket";


export const BasketList = ({ navigation }) => {
  const basket = useSelector(state => state.basket.products)
  const products = Object.values(basket)
  const dispatch = useDispatch()

  const getCategorieById = (id) => {
    // return categories.find((categorie) => categorie.id === id).description;
    return " ";
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
        <Text style={{ ...STYLE.h4 }}> Total: $ {(item.price * basket[item.id].quantity).toFixed(2)}</Text>
      </View>

      <ChangeQuantity
        basket={basket}
        item={item}
      />
      <TouchableOpacity style={{ borderRadius: 10, ...STYLE.shadow, marginTop: 10, justifyContent: "center", backgroundColor: "red" }}
        onPress={() => { dispatch(deleteItem(item)) }}>
        <Text style={{ textAlign: "center", color: "white", }}>Eliminar</Text>
      </TouchableOpacity>
    </Pressable>
  );



  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.productTitle}>Carrito</Text>
      <TouchableOpacity
        style={{ backgroundColor: "green", borderRadius: 10, margin: 10 }}
        onPress={() =>
          navigation.push(ScreensNavigation["PAYMENT"] )}
      >
        <Text style={{ ...styles.productTitle, color: "white", textAlign: "center" }}>Comprar</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.products}>
          {products.length > 0 ? (
            <FlatList
              data={products}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingHorizontal: 10 * 2,
                paddingBottom: 60,
              }}
            />
          ) : <Text h1>Agrega productos al carrito</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
