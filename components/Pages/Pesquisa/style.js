import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F1F1"
    },

    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 15,
        paddingHorizontal: 2,

        height: 80,
    },

    searchInput: {
        backgroundColor: "#FFF",
        height: 45,
        width: "90%",
        borderRadius: 50,

        paddingHorizontal: 15,
        marginRight: 10
    },

    addGroupIcon: {
        backgroundColor: "#FFF",

        width: 35,
        height: 35,

        borderRadius: 30,
    },

    tags: {
        width: "100%",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        paddingHorizontal: 40,
        marginBottom: 20
    },

    tag: {
        backgroundColor: "#FFF",
        padding: 10,

        borderRadius: 30,

        fontSize: 18
    },

    results: {
        backgroundColor: "#FFF",
        width: "90%",

        padding: 15,
        marginHorizontal: 15,

        borderRadius: 25
    },
})