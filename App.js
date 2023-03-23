import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main';
import Search from './src/search';
import TopSheet from './src/TopSheet';
// const Stack = createNativeStackNavigator();
import MyScreen from './src/MyScreen';
import MainScreen from './src/filter';
import SearcH from './src/search';

// import SearchBar from './src/FloatingSearchBar';
// import FloatingSearchBar from './src/FloatingSearchBar';
// import AnimatedSearchBar from './src/FloatingSearchBar';
// import MainScreen from './src/MainScreen';

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ header: () => null }} initialRouteName="Main">
    //     <Stack.Screen name="Main" component={Main}></Stack.Screen>
    //     <Stack.Screen name="Search" component={Search}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <MyScreen />
  );
}







// import React from 'react';
// import 'react-native-gesture-handler'
// import { StatusBar } from 'expo-status-bar';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MainScreen from './src/MainScreen'

// const Stack = createNativeStackNavigator();
// import Main from './src/Main';
// import Search from './src/search';

// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator screenOptions={{ header: () => null }}>
//     //     <Stack.Screen name="Main" component={Main} />
//     //     <Stack.Screen name="Search" component={Search} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <MainScreen />
//   );
// };

// export default App;

