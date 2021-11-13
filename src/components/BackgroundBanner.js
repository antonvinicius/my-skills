import React from 'react';

import {StyleSheet, View} from 'react-native';

const BackgroundBanner = ({color = '#46398f'}) => {
  return (
    <View
      style={[backgroundStyles.background, {backgroundColor: color}]}></View>
  );
};

const backgroundStyles = StyleSheet.create({
  background: {
    height: 100,
    position: 'absolute',
    left: -100,
    right: -100,
    top: -40,
  },
});

export {BackgroundBanner};
