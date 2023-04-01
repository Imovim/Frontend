import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';


export default function IconRemoveGroup({ handleClose, deletePost }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closedButtonTop} onPress={handleClose}></TouchableOpacity>

      <View style={styles.modal}>
        <TouchableOpacity style={styles.closedButtonLeft} onPress={handleClose}></TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.exitGroup}>
            <AntDesign name="closecircle" size={30} color="#FFF" />
            <Text style={styles.exitGroupText}>Deseja sair do "Nome Grupo"</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity>
              <Text style={styles.textButton1}>
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity >
              <Text style={styles.textButton2}>
                Não
              </Text>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity style={styles.closedButtonRight} onPress={handleClose}></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.closedButtonBottom} onPress={handleClose} ></TouchableOpacity>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  modal: {
    width: "100%",
    height: "15%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  closedButtonTop: {
    height: "80%",
    zIndex: 9,
  },

  closedButtonBottom: {
    height: "10%",
    zIndex: 9,
  },

  closedButtonLeft: {
    width: "27.5%",
    height: "100%",
  },

  closedButtonRight: {
    width: "27.5%",
    height: "100%",
  },

  content: {
    width: "90%",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F8670E",

    borderRadius: 30,

    paddingHorizontal: 15
  },

  exitGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",

    marginBottom: 5
  },

  exitGroupText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#FFF",

    marginLeft: 10
  },

  buttons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",

    width: "50%",

    borderRadius: 20,
  },

  textButton1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF"
  },

  textButton2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFF",

    backgroundColor: "#CB5106",

    padding: 10,

    borderRadius: 15
  },

  button: {
    display: "flex",
    flexDirection: "row",

    paddingHorizontal: 12,
    marginVertical: 2
  },

  textButton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",

    paddingLeft: 10
  },

  line: {
    backgroundColor: "#983A00",
    width: "100%",
    height: 2,

    marginVertical: 5
  }

})