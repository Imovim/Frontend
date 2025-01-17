import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native'
let ScreenHeight = Dimensions.get("window").height; // altura da tela
let ScreenWidth = Dimensions.get("window").width; // largura da tela

const height = ScreenHeight/100 // altura em porcentagem
const width = ScreenWidth/100 // largura em porcentagem

export const styles = StyleSheet.create({
    button: {
      backgroundColor: "#FF6709",
      width: 175,
      height: 50,
      
      borderRadius: 20,
      justifyContent: "center",
      alignSelf: 'center',
    },

    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
    }
});