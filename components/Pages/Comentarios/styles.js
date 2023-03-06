import { StyleSheet, StatusBar, Dimensions } from "react-native";
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight / 100; // altura em porcentagem
const width = ScreenWidth / 100; // largura em porcentagem

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20 : 60

export const styles = StyleSheet.create({ 

  header: {
    backgroundColor: '#A512BD',
    height: 10 * height,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  likeAndComents: {
    width: '45%',

    flex: 1,
    flexDirection: 'row',
  },

  button: {
    flexDirection: 'row',
  },

  buttonText: {
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: 15,
    paddingLeft: 5,
  },

  comentsContainer: {
    backgroundColor: '#ededed',
  },
  
  writeComentContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    marginTop: 100,
    marginHorizontal: 10
  },

  photo: {
    width: 50,
    height: 50,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,

    backgroundColor: "#D9D9D9",

    borderColor: "#FF7926",
    borderWidth: 2,

  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF"
  },

  buttonSendComment:{
    width: 40,
    height: 40,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,

    backgroundColor: "#FF7926",
  }

});