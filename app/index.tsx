  // components/HomeScreen.tsx
  import React from 'react';
  import { Link, router} from 'expo-router';
  import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { HomeNavigationProp } from '../app/types';
  
  const Home: React.FC = () => {
    const navigation = useNavigation<HomeNavigationProp>();
  
    const handleNavigateToRegions = () => {
      // router.navigate('/RegionsScreen' );
      navigation.navigate('Regions');
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>स्मार्ट लाइब्ररी</Text>
          <TouchableOpacity style={styles.button} onPress={handleNavigateToRegions}>
            <Text style={styles.buttonText}>वाचनालये</Text>
          </TouchableOpacity>
        </View>
  
        <Image
          source={require('../assets/images/index logo.png')} // Replace with the actual image path
          style={styles.mainImage}
        />
  
        <Text style={styles.mainTitle}>स्मार्ट लाइब्ररी</Text>
        <Text style={styles.subtitle}>महाराष्ट्रातील नामवंत वाचनालये आणि पुस्तकांचा खजिना</Text>
  
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="पुस्तके शोधा"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>🔍</Text>
          </TouchableOpacity>
        </View>
  
        <Image
          source={require('../assets/images/TantraVed icon.png')} 
          style={styles.mainImage}
        />
  
        <Text style={styles.footer}>संपादित जानेवारी, २०२४</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5DEB3', 
      alignItems: 'center',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 10,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#D3D3D3',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#000',
    },
    mainImage: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginVertical: 20,
    },
    mainTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 10,
    },
    subtitle: {
      textAlign: 'center',
      marginVertical: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 20,
    },
    searchInput: {
      flex: 1,
      padding: 10,
      borderRadius: 50,
      backgroundColor: "white",
    },
    searchButton: {
      marginLeft: 10,
      backgroundColor: '#D3D3D3',
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchButtonText: {
      fontSize: 18,
    },
    footer: {
      position: 'absolute',
      bottom: 10,
      fontSize: 12,
    },
  });
  
  export default Home;
