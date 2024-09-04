import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    textHeader: {
        fontSize: 25,
        color: "red",
        fontWeight: "bold",
        textAlign: 'right',
        flex: 1,
    },
    menuIcon: {
        marginRight: 250, 
    },
});

export default styles;
