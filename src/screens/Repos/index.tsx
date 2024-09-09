import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RoundedButton from '../../components/Button';
import {getUserRepos} from '../../services/api';
import RepoCard, {RepoCardProps} from '../../components/RepoCard';
import LottieView from 'lottie-react-native';
import IconButton from '../../components/IconButton';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: {} | undefined;
};

function Repos({route}: any) {
  const user = route?.params?.userName;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [repos, setRepos] = useState<RepoCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserRepos = async () => {
      try {
        const data = await getUserRepos(user);
        setRepos(data);
      } catch (error: any) {
        __DEV__ && console.log(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 6000);
      }
    };
    fetchUserRepos();
  }, [user]);

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
    <View style={styles.container}>
      <IconButton {...iconProps} />
      {loading ? (
        <LottieView
          source={require('./downloading.json')}
          autoPlay
          loop
          style={{
            width: 400,
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ) : (
        <FlatList
          data={repos}
          renderItem={({item}) => <RepoCard {...item} />}
          style={styles.flatlistStyles}
        />
      )}
      <RoundedButton
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
  },
  flatlistStyles: {
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default Repos;
