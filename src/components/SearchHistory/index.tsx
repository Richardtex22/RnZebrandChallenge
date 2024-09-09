import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

interface SearchHistoryProps {
  history: any[];
  onSelect: (query: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({history, onSelect}) => {
  const renderItem = ({item}: any) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
      <Text style={styles.query}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search History</Text>
      <FlatList
        data={history}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  query: {
    fontSize: 16,
    color: 'black',
  },
});

export default SearchHistory;
