import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <View style={styles.container}>
      <Home todoList={todoList} setTodoList={setTodoList} />

      <StatusBar style="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace, monospace",
  },
});
