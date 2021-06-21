import React from "react"
import {View, TouchableOpacity, Text} from "react-native"
import { STYLE } from "../../constants"
import { changeQuantity } from "../../reducers/basket";
import {useDispatch} from "react-redux"

export const ChangeQuantity = ({  basket, item}) => {
  const ifIdInBasket = (id) => basket[id]
  const dispatch = useDispatch()
return(
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              ...STYLE.shadow
            }}
            onPress={() => {
              dispatch(changeQuantity(item, -1));
            }}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              ...STYLE.shadow
            }}
          >
            <Text>{ifIdInBasket(item.id) ? basket[item.id].quantity : 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderTopEndRadius: 10,
              borderBottomRightRadius: 10,
              ...STYLE.shadow
            }}
            onPress={() => {
              dispatch(changeQuantity(item, 1));
            }}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
  )
}
