import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './src/components/NavigationService';
import Login from './src/screen/authentication/Login';
import Home from './src/screen/Home';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
