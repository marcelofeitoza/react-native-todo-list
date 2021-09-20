import React from "react";
import { ScrollView, Text, View } from "react-native";

import styles from "./styles";
import Task from "../Task";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <ScrollView
      style={{
        width: "85%",
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
      }}
    >
      {todoList.map((task, id) => (
        <Task
          key={id}
          task={task}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
