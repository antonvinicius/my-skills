import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import global from '../styles/global';

const SkillCard = ({buttonText, onDelete}) => {
  const [text, setText] = useState('');
  const [alternateTouch, setAlternateTouch] = useState(false);

  const handlePress = () => {
    setAlternateTouch(!alternateTouch);
  };

  return alternateTouch ? (
    <TouchableOpacity style={[skillsStyles.skillsCard]} onPress={handlePress}>
      <Text>Deseja excluir?</Text>
      <View style={skillsStyles.skillsButtonGroup}>
        <TouchableOpacity
          style={skillsStyles.skillsYesButton}
          onPress={onDelete}>
          <Text style={global.textCenter}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={skillsStyles.skillsNoButton}>
          <Text style={global.textCenter} onPress={handlePress}>
            Não
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[skillsStyles.skillsCard]} onPress={handlePress}>
      <Text style={skillsStyles.skillsCardText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const skillsStyles = StyleSheet.create({
  skillsCard: {
    padding: 15,
    borderRadius: 3,
    marginVertical: 10,
    backgroundColor: '#ddd',
  },
  skillsCardText: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 24,
  },
  skillsButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export {SkillCard};
