import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

import { store } from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import MyOrders from "./screens/MyOrders";
import SearchItem from "./screens/SearchItem";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { SCREEN_NAME } from "./Const/ScreenName.const";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "home";

        if (route.name === SCREEN_NAME.HOME) {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === SCREEN_NAME.ORDER) {
          iconName = focused ? "fast-food" : "fast-food-outline";
        } else if (route.name === SCREEN_NAME.CART) {
          iconName = focused ? "cart" : "cart-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.HOME} component={HomeScreen} />
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.ORDER} component={MyOrders} />
    <Tab.Screen options={{ headerShown: false, tabBarBadge: 3 }} name={SCREEN_NAME.CART} component={CartScreen} />
  </Tab.Navigator>
);

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={TabNavigator} />
    <Stack.Screen name={SCREEN_NAME.SEARCH_ITEM} component={SearchItem} />
    <Stack.Screen name={SCREEN_NAME.PAYMENT} component={PaymentScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <MainStackNavigator />
        ) : (
          // SplashScreen component goes here
          <MainStackNavigator />
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
