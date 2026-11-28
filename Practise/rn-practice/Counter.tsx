import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Increment" onPress={() => setCount(prev => prev + 1)} />
      <Text style={styles.tittle}>{count}</Text>
      <Button title="Decrement" onPress={() => setCount(prev => prev - 1)} disabled={count === 0} />
      <Button title="Reset" onPress={() => setCount(0)} />

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

  tittle: {
    fontSize: 32,
    color: "black"
  }
});
