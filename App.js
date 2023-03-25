import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/components/NavigationService";
import Login from "./src/screen/authentication/Login";
import Home from "./src/screen/IsLogin/Home";
import ListCategory from "./src/screen/IsLogin/ListCategory"
import MoviesCategory from "./src/screen/IsLogin/MoviesCategory";
import CategoryInfo from "./src/screen/IsLogin/CategoryInfo";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListCategory" component={ListCategory} />
            <Stack.Screen name="MoviesCategory" component={MoviesCategory} />
            <Stack.Screen name="CategoryInfo" component={CategoryInfo} />



          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
