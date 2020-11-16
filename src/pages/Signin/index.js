import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {},
  buttonText: {},
});

export default function Signin() {
  const [email, setEmail] = useState('ze@gmail.com');
  const [password, setPassword] = useState('123456');
  const {signed, user, signIn} = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }
  function handleSetEmail() {}
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
