import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBECED",
  },

  todoListContainer: {
    width: "100%",
    height: "82.5%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
  },

  titleContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    marginLeft: "10%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2D2D2D",
  },

  emptyListText: {
    fontSize: 22,
    color: "#000",
  },
  emptyListSubtitle: {
    fontSize: 14,
    color: "rgba(0,0,0,0.75)",
  },

  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "auto",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 70,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // footer styles
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 15,
  },
  input: {
    paddingLeft: 20,
    marginRight: 5,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#EBECED",
    borderRadius: 25,
    width: "75%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#3B5998",
    borderColor: "#3B5998",
    borderWidth: 1,
    //put the text on the center
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default styles;
