import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { addTodo } from "./functions";

import TodoList from "../../components/TodoList";

const Home = ({ todoList, setTodoList }) => {
  const [text, setText] = useState("");

  const loadData = () => {
    AsyncStorage.getItem("todoList")
      .then((value) => {
        if (value !== null) {
          setTodoList(JSON.parse(value));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // refresh list on adding new todo
  useEffect(() => {
    console.log("refreshing list");
    loadData();
  }, []);

  return todoList.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TodoList</Text>
      </View>
      <View style={styles.todoListContainer}>
        <TodoList
          style={styles.todoList}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => addTodo(todoList, setTodoList, text, setText)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.emptyListContainer}>
        <Text style={styles.title}>TodoList</Text>
        <Text style={styles.emptyListText}>
          There's nothing on your list ):
        </Text>
        <Text
          style={[
            styles.emptyListText,
            {
              marginBottom: 25,
            },
          ]}
        >
          Start adding your tasks!
        </Text>
        <Text style={styles.emptyListSubtitle}>
          Click on the task to mark it as done or not.
        </Text>
        <Text style={styles.emptyListSubtitle}>
          Click and hold on the task to delete it.
        </Text>
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => addTodo(todoList, setTodoList, text, setText)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
