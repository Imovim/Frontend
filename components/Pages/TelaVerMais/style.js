import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFF",
  },

  titleContainer: {
    marginTop: 25,
    marginBottom: 20,

    paddingHorizontal: 15
  },

  title: {
    fontSize: 22,
    fontWeight: "600"
  },

  containerTags: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginHorizontal: 20,
    marginBottom: 15,
  },

  titleTags: {
    fontSize: 20,
    margin: 10
  },

  tags: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap"
  },

  containerPhotos: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginBottom: 15
  },

  containerPhotoTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginHorizontal: 20,
    margin: 10
  },

  titlePhotos: {
    fontSize: 20,
    margin: 10
  },

  seeMorePhotos: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8670E"
  },

  photos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15
  },

  containerEvents: {
    backgroundColor: "#F1F1F1",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingBottom: 15,

    marginBottom: 15
  },

  containerEventsTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginHorizontal: 20,
    margin: 10
  },

  titleEvents: {
    fontSize: 20,
  },

  seeMoreEvents: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8670E"
  },

  events: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
})