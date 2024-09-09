import React, {useState, useEffect} from 'react';
import {getUsers} from '../../services/api';
import {
  addSearch,
  clearSearchHistory,
} from '../../store/SearchSlice/searchHistorySlice';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import LottieView from 'lottie-react-native';
import RoundedButton from '../../components/Button';
import IconButton from '../../components/IconButton';
import {useNavigation} from '@react-navigation/native';
import UserCard from '../../components/UserCard';
import SearchHistory from '../../components/SearchHistory';
import {filterUsersByQuery} from '../../utils/filterUtil';

function Users() {
  const dispatch = useDispatch();
  const history = useSelector(state => state.searchHistory.searchHistory);
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [newHistory, setNewHistory] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error: any) {
        __DEV__ && console.log(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
    fetchUsers();
    setNewHistory(history);
  }, [history]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearSearchHistory = () => {
    dispatch(clearSearchHistory());
  };
  const iconProps = {
    source: require('../../assets/images/back-arrow.png'),
    onPress: () => {
      navigation.canGoBack() && navigation.goBack();
    },
    size: 36,
    style: {
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      paddingTop: 16,
    },
  };

  return (
    <>
      <IconButton {...iconProps} />
      <View style={UserStyles.container}>
        <TextInput
          value={searchQuery}
          onChangeText={text => handleSearch(text)}
          style={UserStyles.textInputStyle}
          onSubmitEditing={() => {
            dispatch(addSearch(searchQuery));
            setSearchQuery('');
          }}
          placeholder="Start typing..."
          placeholderTextColor="#cccccc"
        />
        {searchQuery?.length > 0 && (
          <IconButton
            style={{position: 'absolute', right: 32, top: 36, zIndex: 9999}}
            source={require('../../assets/images/close.png')}
            onPress={() => setSearchQuery('')}
            size={20}
          />
        )}
        {newHistory.length > 0 && (
          <>
            <SearchHistory history={newHistory} onSelect={setSearchQuery} />
            <RoundedButton
              title="Clear Search History"
              onPress={handleClearSearchHistory}
            />
          </>
        )}
      </View>
      {loading ? (
        <LottieView
          source={require('./loading.json')}
          autoPlay
          loop
          style={UserStyles.animationContainer}
        />
      ) : (
        <FlatList
          data={filterUsersByQuery(users, searchQuery)}
          renderItem={({item}) => <UserCard user={item} />}
          contentContainerStyle={UserStyles.flatListContainer}
          style={{marginBottom: 16}}
        />
      )}
    </>
  );
}

export const UserStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  textInputStyle: {
    borderColor: '#646464',
    borderWidth: 2,
    marginVertical: 16,
    paddingLeft: 24,
    fontSize: 24,
    borderRadius: 36,
  },
  animationContainer: {
    width: 400,
    height: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    marginVertical: 8,
    paddingHorizontal: 10,
  },
});

export default Users;
