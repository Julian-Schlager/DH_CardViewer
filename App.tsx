import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './Components/Card';
import AddPdfs from './Components/AddPdf';
import Nav from './Components/Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Cards/>
      <AddPdfs/>
      <Nav/>
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
});
