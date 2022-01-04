import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Quiz from './quiz/components/Quiz';
import PrincipalScreen from './quiz/components/PrincipalScreen'
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TicTacToe from './quiz/components/TicTacToe';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="PrincipalScreen">
      <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
      <Stack.Screen name="TicTacToe" component={TicTacToe} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});
