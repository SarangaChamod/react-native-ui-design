import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/navigation.jsx'
import Index_2 from './All_Components/Profiles/profile_index_5.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Index_2/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // paddingTop:20
    
    
  },
});
