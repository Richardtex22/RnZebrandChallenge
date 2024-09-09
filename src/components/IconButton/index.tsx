import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export interface IconButtonProps {
  key?: number;
  source: ImageSourcePropType;
  size?: number;
  onPress: () => void;
  style?: ViewStyle | object;
}

const IconButton: React.FC<IconButtonProps> = ({
  source,
  onPress,
  style,
  size,
}: IconButtonProps) => {
  const iconSize = size ? size : 32;
  const iconStyle = {
    width: iconSize,
    height: iconSize,
  };
  return (
    <TouchableOpacity style={[styles.iconWrapper, style]} onPress={onPress}>
      <Image source={source} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default IconButton;
