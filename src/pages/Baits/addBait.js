import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Input,
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Button,
  Text,
} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../service/api';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container2: {
    width: '100%',
  },
});

export default function AddBait() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectData, setSelectData] = useState([]);

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [selectedItem, setSelectedItem] = useState('');

  const displayValue = '';

  useEffect(() => {
    async function loadBaitsData() {
      const storageToken = await AsyncStorage.getItem('@RnAuth:token');

      api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      api.defaults.headers = {'Content-Type': 'application/json'};
      const response = await api.get('/brands');

      console.log(response.data.bait_brands);
      setSelectData(response.data.bait_brands);
    }
    loadBaitsData();
  }, []);
  console.log(selectedIndex);
  return (
    <View style={styles.container}>
      <Input
        value={name}
        label="Name"
        placeholder="Bait Name"
        onChangeText={(name) => setName(name)}
      />
      <Input
        value={description}
        label="Description"
        placeholder="Bait description"
        onChangeText={(description) => setDescription(description)}
      />
      <Layout style={styles.container2} level="1">
        <Select
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          {selectData.map((brand) => (
            <SelectItem key={brand.id} title={brand.brand} />
          ))}
        </Select>
      </Layout>
      <Button onPress={() => null}>Save</Button>
    </View>
  );
}
