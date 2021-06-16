import React, { useState } from "react";
import { Image, View, FlatList, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useGetStore } from "../../hooks/useGet";
import { initCategories } from "../../reducers/categories";

export const Categories = ({ categories }) => {
  const dispatch = useDispatch();
  useGetStore(
    getAllCategories,
    dispatch,
    initCategories
  );
  const [selectedCategorie, setSelectedCategorie] = useState();
  const onSelectCategorie = (item) => {
    // let restaurantList = restaurantData.filter(a => a.categories.includes(item.id))
    setSelectedCategorie(item);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          paddingBottom: 20,
          backgroundColor:
            setSelectedCategorie?.id === item.id ? "orange" : "white",
          primary: "white",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
          ...styles.shadow,
        }}
        onPress={() => onSelectCategorie(item)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            // source={}
            resizeMode="contain"
            style={{
              backgroundColor:
                selectedCategorie?.id === item.id ? "white" : "light gray",
              width: 30,
              height: 30,
            }}
          />
        </View>
        <Text style={{ marginTop: 10, color: "white" }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        padding: 10 * 2,
        color: selectedCategorie?.id === item.id ? "white" : "black",
      }}
    >
      <Text>Main</Text>
      <Text>Categorias</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 10 * 2 }}
      ></FlatList>
    </View>
  );
};
