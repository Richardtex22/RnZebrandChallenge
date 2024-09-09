import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import RoundedButton from '../Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface User {
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  repos_url: string;
  type: string;
  url: string;
}

interface UserCardProps {
  user: User;
}

type RootStackParamList = {
  Repos: {userName: string} | undefined;
};

const UserCard: React.FC<UserCardProps> = ({user}) => {
  const {html_url, avatar_url, login} = user;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handlePress = () => {
    Linking.openURL(html_url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  const handleReposPress = () => {
    navigation.navigate('Repos', {userName: login});
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: avatar_url}} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.login}>{login}</Text>
        <Text style={styles.url}>{html_url}</Text>

        <RoundedButton
          textStyle={styles.textStyle}
          customStyle={styles.buttonStyle}
          title="GitHub Profile"
          onPress={handlePress}
        />
        <RoundedButton
          textStyle={styles.textStyle}
          customStyle={styles.buttonStyle}
          title="Repos"
          onPress={handleReposPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  url: {
    fontSize: 18,
    fontWeight: 'regular',
    marginBottom: 16,
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  textStyle: {
    color: '#000',
    textAlign: 'left',
  },
  buttonStyle: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    width: '100%',
    marginBottom: 16,
  },
});

export default UserCard;
