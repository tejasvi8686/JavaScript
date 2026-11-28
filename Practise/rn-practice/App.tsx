
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => setCount(prev => prev + 1)} />
      <Text>{count}</Text>
      <Button title="Decrement" onPress={() => setCount(prev => prev - 1)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
     color :  "black"
  }
});
