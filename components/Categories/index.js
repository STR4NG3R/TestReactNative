import React, { Fragment, useState } from "react";
import { STYLE } from "../../constants";
import { Image, View, FlatList, Text, TouchableOpacity } from "react-native";
import { useGetStore } from "../../hooks/useGet";
import { getAllCategories } from "../../services/categories";
import { initCategories } from "../../reducers/categories";

export const Categories = () => {
  const { error, loading, data } = useGetStore(
    getAllCategories,
    initCategories,
    (state) => state.categories
  );

  const [selectedCategorie, setSelectedCategorie] = useState(1);
  const onSelectCategorie = (item) => {
    setSelectedCategorie(item.id);
    // let restaurantList = restaurantData.filter(a => a.categories.includes(item.id))
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 10,
          padding: 10,
          paddingBottom: 20,
          backgroundColor: selectedCategorie === item.id ? "orange" : "white",
          primary: "white",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          ...STYLE.shadow,
        }}
        onPress={() => onSelectCategorie(item)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            backgroundColor: selectedCategorie === item.id ? "white" : "gray",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            color: selectedCategorie === item.id ? "white" : "black",
          }}
        >
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Fragment>
      {!error && !loading && typeof data !== "undefined" ? (
        <View
          style={{
            padding: 10 * 2,
          }}
        >
          <Text style={{ ...STYLE.h2 }}>Categorias</Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: 10 * 2 }}
          ></FlatList>
        </View>
      ) : null}
    </Fragment>
  );
};
