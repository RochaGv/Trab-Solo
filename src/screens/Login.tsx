import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  DocenteHome: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario === 'Docente' && senha === '1234') {
      navigation.replace('DocenteHome');
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Docente</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1
  },
  button: {
    backgroundColor: '#0054a6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default Login;
