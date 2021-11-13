import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, text, mt = 0, mb = 0, br = 0}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {marginTop: mt, marginBottom: mb, borderRadius: br},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8EDB5A',
    padding: 15,
  },
  buttonText: {
    fontSize: 19,
  },
});

export {Button};
