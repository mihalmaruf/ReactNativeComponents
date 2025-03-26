import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <View style={{flex: 1, padding: 25, backgroundColor: "white"}}>
        {loading ? (
            <Text>Loading...</Text>
        ) : (
            <FlatList 
            data={data}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <Text>{item.title}</Text>}
            />
        )}
    </View>
  )
}

export default DataFetch