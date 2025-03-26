import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
      setText("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.todoItem}>
      <Text style={[styles.todoText, item.completed && styles.completed]}>
        {item.text}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => toggleTodo(index)} style={styles.button}>
          <Text>{item.completed ? "Undo" : "Done"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeTodo(index)} style={[styles.button, styles.remove]}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Add a to-do"
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity onPress={addTodo} style={styles.addButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginRight: 8,
  },
  addButton: {
    padding: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
  },
  list: {
    flex: 1,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  todoText: {
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    padding: 8,
    marginLeft: 8,
    backgroundColor: "#eee",
  },
  remove: {
    backgroundColor: "#ffdddd",
  },
});

export default TodoList;