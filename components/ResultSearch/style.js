import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    result: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

        marginBottom: 15,

        paddingVertical: 15
    },

    photoUser: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 100,
        height: 100,

        borderRadius: 50,

        backgroundColor: "#D9D9D9",

        marginRight: 15
    },

    profileImage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 100,
        height: 100,

        borderRadius: 50,

        marginRight: 15
    },

    resultText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18
    }
})