import { StyleSheet, SafeAreaView } from 'react-native';
import Index from './App/Index/Index'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Index />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});