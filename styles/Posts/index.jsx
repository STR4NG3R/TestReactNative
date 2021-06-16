import { StyleSheet } from "react-native"

export const SPACING = 15;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listHeader: {
    fontSize: 28,
    fontWeight: "800",
    margin: SPACING,
  },
  products: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  productTexts: {
    margin: 10,
    marginBottom: 15,
  },
  productHeader: {
    fontWeight: "600",
  },
  productDescription: {
    color: "gray",
  },
  productImage: {
    height: 300,
    width: "100%",
  },
  productDetails: {
    paddingVertical: 10,
    paddingHorizontal: SPACING,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 24,
  },
  productContactButton: {
    marginVertical: SPACING,
  },
});
