import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './navigation/drawer/MainDrawerNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainDrawerNavigator />
    </NavigationContainer>
  );
}

export default App;