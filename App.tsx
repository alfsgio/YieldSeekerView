import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen'
import DetailsScreen from './src/screens/DetailsScreen';
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
};

export default App;