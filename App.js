import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/components/NavigationService";
import Login from "./src/screen/authentication/Login";
import Home from "./src/screen/IsLogin/Home";
import ListCategory from "./src/screen/IsLogin/ListCategory";
import MoviesCategory from "./src/screen/IsLogin/MoviesCategory";
import CategoryInfo from "./src/screen/IsLogin/CategoryInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VideoPlayer from "./src/screen/IsLogin/VideoPlayer";

const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    global.user = await AsyncStorage.getItem("userName");
    console.log("userName", await AsyncStorage.getItem("userName"));
  };
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={global.user ? "Login" : "Home"}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListCategory" component={ListCategory} />
            <Stack.Screen name="MoviesCategory" component={MoviesCategory} />
            <Stack.Screen name="CategoryInfo" component={CategoryInfo} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;
