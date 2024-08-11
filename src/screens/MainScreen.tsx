import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { Text, ToggleButton } from 'react-native-paper';
import CardComponent from '../components/CardComponent';
import ApiService from '../services/ApiService';
import { Appartment } from '../models/Appartment'; // Adjust the import path as necessary

const MainScreen = () => {
  const [data, setData] = useState<Appartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>('postalCode');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await ApiService.getYield();
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeSort = (sortValue: string) => {
    const sortedData = [...data];
    switch (sortValue) {
      case 'yield':
        sortedData.sort((a, b) => a.yield - b.yield); // Sorting in descending order
        break;
      case 'city':
        sortedData.sort((a, b) => a.city.localeCompare(b.city)); // Sorting by city name
        break;
      case 'size':
        sortedData.sort((a, b) => b.surfaceArea - a.surfaceArea); // Sorting in descending order
        break;
      case 'score':
        sortedData.sort((a, b) => b.score - a.score); // Sorting in descending order
        break;
      default:
        sortedData.sort((a, b) => a.postalCode - b.postalCode); // Default sorting by postal code
        break;
    }

    setData(sortedData);
    setValue(sortValue);
  };

  const renderItem = ({ item }: { item: Appartment }) => (
    <CardComponent appart={item} />
  );

  if (loading) {
    return <SafeAreaView style={styles.safearea}><Text>Loading...</Text></SafeAreaView>;
  }

  if (error) {
    return <SafeAreaView style={styles.safearea}><Text>Error: {error}</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <ToggleButton.Row style={styles.togglerow} onValueChange={changeSort} value={value}>
        <ToggleButton icon="home-group-plus" value="yield" />
        <ToggleButton icon="home-city" value="city" />
        <ToggleButton icon="vector-square" value="size" />
        <ToggleButton icon="card-account-details-star-outline" value="score" />
      </ToggleButton.Row>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  togglerow: {
    justifyContent: 'center',
    marginVertical: 10,
  } as ViewStyle,
});

export default MainScreen;
