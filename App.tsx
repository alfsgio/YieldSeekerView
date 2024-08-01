import React from "react";
import { PaperProvider } from "react-native-paper";
import MainScreen from './src/screens/MainScreen'

const App = () => {
  return (
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
    
  );
};

export default App;