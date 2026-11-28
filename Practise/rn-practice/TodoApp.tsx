import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import React, { useState } from 'react';

type Todo = {
  id: string;
  text: string;
}

export default function TodoApp() {
  // Yahan apni 2 state likho

  const [text, setText] = useState("");
  const [todo, setTodo] = useState<Todo[]>([])


  const addTodo = () => {
    const newTodo = { id: Date.now().toString(), text: text };
    console.log("id:", newTodo.id);
    setTodo(prev => [...prev, newTodo]);
  }


  return (
    <View style={styles.container}>
      {/* Yahan TextInput, Add button aur list aayegi */}
      <TextInput value={text} onChangeText={setText} placeholder='enter you task' style={styles.input} />
      <Text> Total: {todo.length} </Text>
      <Button title="add" onPress={addTodo} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: 80,
    justifyContent: "center",

    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
});
