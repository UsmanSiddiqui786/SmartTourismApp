import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from './src/components/Login';
import {Home} from './src/components/Home';
import { Booking } from './src/components/Booking';

const Stack = createNativeStackNavigator();

export default function App (){
  
  
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{headerShown:false}}
            name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home}
            options={{
            title: 'Packages',
            headerStyle: {
              backgroundColor: '#003f5c',
            },
            headerTintColor:'#fb5b5a',
            headerTitleAlign:'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            }} 
          />
          <Stack.Screen name="Booking" component={Booking}
            options={{
            title: 'Booking',
            headerStyle: {
              backgroundColor: '#003f5c',
            },
            headerTintColor:'#fb5b5a',
            headerTitleAlign:'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            }} 
          />
      </Stack.Navigator>
      </NavigationContainer>
       
    );
  
}

