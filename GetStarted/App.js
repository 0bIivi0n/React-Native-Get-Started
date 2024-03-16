import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  User from './components/user';
import  TitleText from './components/title';
import UserImage from './components/userImg';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleText />
      <Text>Hello there</Text>
      <User style={styles.name}/>
      <UserImage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
