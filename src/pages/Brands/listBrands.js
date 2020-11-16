import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';

import api from '../../service/api';

export default function ListBrands({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadBrandsData() {
      const response = await api.get('/brands');
      setData(response.data.bait_brands);
      console.log(response.data.bait_brands);
    }
    loadBrandsData();
  }, []);

  const _renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={{color: '#000'}}>{item.brand}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>List Brands</Text>
      <Button
        title="Add catch"
        onPress={() => navigation.navigate('AddCatch')}
      />
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
});
