import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Reservation from './screens/Reservation';
import colors from 'res/colors';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: colors.gymPod}}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({title: `Welcome ${route.params.username}!`})}
      />
      <Stack.Screen
        name="Reservation"
        component={Reservation}
        options={({route}) => ({title: `Book ${route.params.pod}`})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
