import { StyleSheet } from "react-native";

const FONTSIZE = 20;

const styles = StyleSheet.create({
  taskCompleted: {
    textDecorationLine: "line-through",
    color: "#ccC",
    fontSize: FONTSIZE,
    marginLeft: 10
  },

  taskNotCompleted: {
    color: "#000",
    fontSize: FONTSIZE,
    marginLeft: 10
  },

  taskContainer: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 0.65,
    alignItems: "center",
    borderBottomColor: "#ccc",
    margin: 5,
    width: "95%"
  },
});

export default styles;
