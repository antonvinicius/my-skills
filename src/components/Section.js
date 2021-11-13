import React from 'react';

import {View, StyleSheet} from 'react-native';

const Section = ({children}) => {
  return <View style={sectionStyles.section}>{children}</View>;
};

const sectionStyles = StyleSheet.create({
  section: {
    marginVertical: 15,
  },
});

export {Section};
