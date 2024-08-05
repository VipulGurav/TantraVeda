// components/RegionsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchRegions, Region } from '../api/apiService';

const RegionsScreen: React.FC = () => {
  const [regions, setRegions] = useState<Region[]>([]); // Specify the type here
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRegions = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchRegions();
        
        setRegions(data); // Set the fetched data to the state
      } catch (err) {
        setError('Error fetching regions');
      } finally {
        setLoading(false);
      }
    };

    loadRegions();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={regions}
          keyExtractor={(item) => item.SrNo.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.Name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5DEB3',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default RegionsScreen;


