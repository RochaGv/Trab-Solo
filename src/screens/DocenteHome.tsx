import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  DocenteHome: undefined;
  CadastrarTurma: undefined;
  CadastrarMonitor: undefined;
  CadastrarAluno: undefined;
  FazerChamada: undefined;
  AssociarAlunoTurma: undefined;
  ControleFrequencia: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DocenteHome'>;
  route: RouteProp<RootStackParamList, 'DocenteHome'>;
};

const DocenteHome: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Painel do Docente</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarTurma')}>
        <Text style={styles.buttonText}>Cadastrar Turma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarMonitor')}>
        <Text style={styles.buttonText}>Cadastrar Monitor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarAluno')}>
        <Text style={styles.buttonText}>Cadastrar Aluno</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FazerChamada')}>
        <Text style={styles.buttonText}>Fazer Chamada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AssociarAlunoTurma')}>
        <Text style={styles.buttonText}>Associar/Desassociar Aluno de Turma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ControleFrequencia')}>
        <Text style={styles.buttonText}>Controle de Frequência</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333'
  },
  button: {
    width: '100%',
    backgroundColor: '#0054a6',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default DocenteHome;
