import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  Linking,
} from 'react-native';
import RoundedButton from '../Button';

interface HeaderIProps {
  title: string;
  backgroundImage: ImageSourcePropType;
}
const Header: React.FC<HeaderIProps> = ({title, backgroundImage}) => {
  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.headerContainer}>
        <View style={styles.textView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
          <Text style={styles.subtitle}>Tools in this project:</Text>
          <View style={{flexDirection: 'column', marginTop: 16}}>
            <Text style={styles.text}>- React Native</Text>
            <Text style={styles.text}>- Redux</Text>
            <Text style={styles.text}>- Axios</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.btnView}>
        <RoundedButton
          title="Web version"
          textStyle={{color: '#000'}}
          customStyle={{
            backgroundColor: '#fff',
          }}
          onPress={() =>
            Linking.openURL('https://luuna-challenge.netlify.app/')
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    paddingTop: 36,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    paddingTop: 18,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textView: {
    marginTop: 64,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left',
  },
  btnView: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 24,
  },
});

export default Header;
