import React, { useState, useEffect } from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Header from './header';
import { useNavigation } from '@react-navigation/native';
import Reader from './reader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Quiz from './src/quiz';


global.hey = -1;
console.disableYellowBox = true;
function HomeScreen({navigation}) {
  return (
      <Home press2 = {'Details'}  update = {0}/>
      
  );
}

function DetailsScreen({navigation}) {
  hey += 1;
  return (
    <Reader choose = {hey}/>
  );

}

function QuizScreen({navigation}) {
  return (
    <Quiz />
  );

}

const Stack = createStackNavigator();

const Stack2 = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <Header title = 'NEWS' height = {40}/>,
            headerStyle: {
              backgroundColor: '#660101',
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: (props) => <Header title = 'NEWS' height = {0}/>,
            headerStyle: {
              backgroundColor: '#660101',
            },
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            headerTitle: (props) => <Header title = 'QUIZ' height = {0}/>,
            headerStyle: {
              backgroundColor: '#660101',
            },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
