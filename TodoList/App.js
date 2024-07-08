import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import TodoList from './components/TodoList';
export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Today's tasks: Never Give Up</Text>
        <ScrollView style={styles.todo}>
        <TodoList  />
        </ScrollView>
        <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  todo:{
    marginTop:115
  },
  container: {
    top:40,
    flex: 1,
    backgroundColor: '#ffc4a4',
    alignItems:'center',
    justifyContent:'center',
    fontSize:28
  },
  header:{
    position:'fixed',
    top:40, 
    marginBottom:50,
    fontWeight:'bold',
    fontSize:28,
    padding:4,
    zIndex: 4,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:'#85D9F1'
  }
});
