/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.name}</Text>
      <Button
        title="Navigate to second screen"
        onPress={() => {
          navigation.push('Second Screen');
        }}
      />
    </View>
  );
};

const SecondScreen = ({route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{route.name}</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen With a Ridiculously Long Title And Some Extra"
          component={HomeScreen}
        />
        <Stack.Screen name="Second Screen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
