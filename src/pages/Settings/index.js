import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
  button: {
    marginTop: 10,
  },
  buttonText: {},
});

export default function Settings({navigation}) {
  function handleOpenBrands() {
    navigation.navigate('ListBrand');
  }
  function handleOpenBaits() {
    navigation.navigate('ListBaits');
  }

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button style={styles.button} title="Brands" onPress={handleOpenBrands} />
      <Button title="Baits" onPress={handleOpenBaits} />
    </View>
  );
}
