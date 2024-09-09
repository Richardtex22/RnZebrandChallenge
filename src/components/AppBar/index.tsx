import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton, {IconButtonProps} from '../IconButton';

interface AppBarProps {
  icons: IconButtonProps[];
}

const AppBar = ({icons}: AppBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        {icons.map((icon, index) => {
          /*const iconSize = icon.size ? icon.size : 32;
           const iconStyle = {
            width: iconSize,
            height: iconSize,
          };
          {
           <TouchableOpacity
            key={index}
            style={styles.iconWrapper}
            onPress={icon.onPress}>
            <Image source={icon.source} style={iconStyle} />
            source={icon.source}
            key={index}
            onPress={icon.onPress}
            style={styles.iconWrapper}
          </TouchableOpacity>*/

          return (
            <>
              <IconButton
                key={index}
                size={icon.size}
                onPress={icon.onPress}
                source={icon.source}
              />
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#646464',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  iconsContainer: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    flexDirection: 'row',
  },
  iconWrapper: {
    marginHorizontal: 15,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AppBar;
