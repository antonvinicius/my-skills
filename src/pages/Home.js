import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';

// Assets
import logo from '../assets/happiness.png';

// Components
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import {Section} from '../components/Section';
import {BackgroundBanner} from '../components/BackgroundBanner';

// Others
import globalStyles from '../styles/global';

const Home = () => {
  const [validationText, setValidationText] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const validateSkill = skill => {
    if (skill.length > 16 || skill.length < 1)
      return 'Woops! Máximo de 16 caracteres e mínimo de 1';

    // Ok
    return '';
  };

  const cleanField = () => {
    setNewSkill('');
  };

  const handleAdd = () => {
    // Validar a skill
    const result = validateSkill(newSkill);
    // Mostrar mensagem de erro com base na validação
    setValidationText(result);
    // Se for válido, adicionar no array de skills
    if (result === '') {
      skills.push(newSkill);
      // Limpa o campo de adicionar
      cleanField();
    }
  };

  const handleDelete = index => {
    setSkills(oldState => oldState.filter((_, i) => i !== index));
  };

  return (
    <View style={homeStyles.container}>
      {/* Header */}
      <Section>
        <BackgroundBanner />
        <View style={headerStyles.header}>
          <Image style={headerStyles.headerLogo} source={logo} />
          <Text style={headerStyles.headerGreeting}>
            <Text style={globalStyles.textBolder}>Bom dia</Text>, como vai?
          </Text>
        </View>
      </Section>

      {/* Form */}
      <Section>
        <Text style={formStyles.formLabel}>Adicione uma habilidade</Text>
        <TextInput
          style={formStyles.formInput}
          placeholder="Eu sei programar!"
          value={newSkill}
          onChangeText={setNewSkill}
        />
        <Text style={formStyles.formValidation}>{validationText}</Text>
        <Button text="Adicionar" mt={10} br={3} onPress={handleAdd} />
      </Section>

      <Section>
        <Text style={homeStyles.sectionTitle}>Minhas habilidades</Text>
        <FlatList
          data={skills}
          renderItem={({item, index}) => (
            <SkillCard buttonText={item} onDelete={() => handleDelete(index)} />
          )}
          keyExtractor={item => item}
          style={{marginBottom: 330}}
        />
      </Section>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerLogo: {
    width: 100,
    height: 100,
  },
  headerGreeting: {
    fontSize: 18,
    marginLeft: 10,
  },
});

const formStyles = StyleSheet.create({
  formLabel: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  formInput: {
    backgroundColor: '#ddd',
    borderRadius: 4,
    fontSize: 18,
    paddingHorizontal: 15,
  },
  formValidation: {
    color: 'red',
  },
});

export default Home;
