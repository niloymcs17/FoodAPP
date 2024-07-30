const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import MyOrders from "./screens/MyOrders";
import Profile from "./screens/Profile";
import SearchItem from "./screens/SearchItem";
import SideMenu from "./screens/SideMenu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyOrders"
              component={MyOrders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="SearchItem"
              component={SearchItem}
              options={{ headerShown: false }}
            />
        
            
            
            <Stack.Screen
              name="SideMenu"
              component={SideMenu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
      </Provider>
  );
};
export default App;
