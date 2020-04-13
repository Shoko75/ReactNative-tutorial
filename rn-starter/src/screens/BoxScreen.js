import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.ViewOneStyle} />
      <View style={styles.ViewTwoStyle} />
      <View style={styles.ViewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ViewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  ViewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    top: 50
  },
  ViewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  }
});

export default BoxScreen;