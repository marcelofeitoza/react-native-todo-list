import React from "react";
import { CheckBox, Text, TouchableOpacity, View, Alert } from "react-native";
import { markTodo, deleteTodo } from "../../pages/Home/functions";

import styles from "./styles";

const Task = ({ task, todoList, setTodoList }) => {
  function showAlert(task) {
    Alert.alert(
      "Delete task?",
      `You are going to delete your task with title: ${task.task}.\nProceed?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { 
          text: "Delete", 
          onPress: () => deleteTodo(todoList, setTodoList, task)
        },
      ]
    );
  }

  return (
    //<View style={styles.taskContainer}>
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => {
        markTodo(todoList, setTodoList, task);
      }}
      onLongPress={() => {
        showAlert(task);
      }}
      //timeout for long press
      setTimeout={1000}
    >
      <CheckBox
        value={task.isCompleted}
        onValueChange={() => {
          markTodo(todoList, setTodoList, task);
        }}
        style={styles.checkbox}
        tintColors={{ true: '#3B5998', false: 'black' }}
      />
      {task.isCompleted ? (
        <Text style={styles.taskCompleted}>{task.task}</Text>
      ) : (
        <Text style={styles.taskNotCompleted}>{task.task}</Text>
      )}
    </TouchableOpacity>
    //</View>
  );
};

export default Task;
