import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Header from '../../components/Header';
import AppBar from '../../components/AppBar';
import {useNavigation} from '@react-navigation/native';
import RoundedButton from '../../components/Button';

function Home() {
  const navigation = useNavigation();
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  const handleIconPress = (screen: string) => {
    navigation.navigate(screen as never);
  };
  const icons = [
    {
      source: require('../../assets/images/github8.png'),
      onPress: () => openLink('https://github.com/Richardtex22'),
      size: 36,
    },
    {
      source: require('../../assets/images/person.png'),
      onPress: () => handleIconPress('Users'),
      size: 34,
    },
  ];
  const image = {
    uri: 'https://raw.githubusercontent.com/Richardtex22/assets/master/technology-git-github-hd-wallpaper-preview.jpg',
  };
  return (
    <>
      <View style={styles.container}>
        <AppBar icons={icons} />
        <Header title="Zebrands Frontend Challenge" backgroundImage={image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  logo: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
  },
  gradient: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBody: {
    color: '#fff',
  },
});

export default Home;
