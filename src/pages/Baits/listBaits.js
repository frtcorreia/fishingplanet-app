import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

import api from '../../service/api';

export default function ListBaits({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadBaitsData() {
      const response = await api.get('/baits');
      setData(response.data.baits);
      console.log(response.data.baits);
    }
    loadBaitsData();
  }, []);

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={{color: '#000'}}>{item.name}</Text>
        <Text style={{color: '#000'}}>{item.description}</Text>
      </View>
    );
  };

  function handleAddBaits() {
    navigation.navigate('AddBait');
  }
  return (
    <View>
      <Text>List Baits</Text>
      <Button title="AddBait" onPress={handleAddBaits} />
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
