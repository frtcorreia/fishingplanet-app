import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default function Dashboard() {
  const {signOut, user} = useAuth();
  //console.log(user);
  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text>{user?.firstname}</Text>
      <View>
        <Icon name="rocket" size={20} color="red" />
      </View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}
