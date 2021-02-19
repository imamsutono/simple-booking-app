import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Reservation from './screens/Reservation';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'The Gym Pod'}}
      />
      <Stack.Screen name="Reservation" component={Reservation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
