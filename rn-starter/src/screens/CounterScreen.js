import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increase':
      return { ...state, count: state.count + 1 };
    case 'Decrease':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: 'Increase' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'Decrease' })} />
      <Text>Current Counter: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

