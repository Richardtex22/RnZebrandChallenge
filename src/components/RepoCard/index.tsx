import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface RepoCardProps {
  description: string;
  id: number;
  repoName: string;
  name: string;
  repoUrl: string;
  language: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const RepoCard: React.FC<RepoCardProps> = ({
  description,
  name,
  repoName,
  repoUrl,
  language,
  containerStyle,
  textStyle,
}) => {
  const handlePress = () => {
    Linking.openURL(repoUrl);
  };

  return (
    <TouchableOpacity
      style={[styles.card, containerStyle]}
      onPress={handlePress}>
      <View style={styles.content}>
        <Text style={[styles.title, textStyle]}>{repoName}</Text>
        <Text>{name}</Text>
        <Text style={styles.description}>{description ?? 'N/A'}</Text>
        <Text style={styles.language}>Language: {language ?? 'N/A'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    margin: 10,
    padding: 15,
  },
  content: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  language: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 10,
  },
});

export default RepoCard;
