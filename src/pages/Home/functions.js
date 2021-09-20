import AsyncStorage from "@react-native-async-storage/async-storage";

export const addTodo = (list, setList, text, setText) => {
  if (text) {
    const newTodo = {
      id: list.length + 1,
      task: text,
      isCompleted: false,
    };

    if (list.length === 0) {
      AsyncStorage.setItem("todoList", JSON.stringify([newTodo])).then(() => {
        setList([newTodo]);
      });
    } else {
      const newList = [...list, newTodo];
      AsyncStorage.setItem("todoList", JSON.stringify(newList)).then(() => {
        setList(newList);
      });
    }
    setText("");
  } else {
    console.log(list);
  }
};

export const markTodo = (list, setList, todo) => {
  // find the given todo in the list and update it
  const newTodo = {
    id: todo.id,
    task: todo.task,
    isCompleted: !todo.isCompleted,
  };

  const newList = list.map((item) => {
    if (item.id === newTodo.id) {
      return newTodo;
    }
    return item;
  });

  AsyncStorage.setItem("todoList", JSON.stringify(newList)).then(() => {
    setList(newList);
  });
};

export const deleteTodo = (list, setList, todo) => {
  // find the given todo in the list and update it
  const newList = list.filter((item) => {
    return item.task !== todo.task;
  });

  AsyncStorage.setItem("todoList", JSON.stringify(newList)).then(() => {
    setList(newList);
  });
};

export default {
  addTodo,
  markTodo,
  deleteTodo,
};
