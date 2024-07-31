import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

import { store } from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import MyOrders from "./screens/MyOrders";
import SearchItem from "./screens/SearchItem";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { SCREEN_NAME } from "./Const/ScreenName.const";
import { selectCartItemsCount } from "./store/cartSlice";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CatagoryScreen from "./screens/CatagoryScreen";
import SideMenu from "./screens/SideMenu";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const cartItemCount = useSelector(selectCartItemsCount);
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    if (cartItemCount) {
      setItemCount(cartItemCount);
    }
  }, [cartItemCount]);
  return (<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "home";

        if (route.name === SCREEN_NAME.HOME) {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === SCREEN_NAME.PROFILE) {
          iconName = focused ? "person" : "person-outline";
        } else if (route.name === SCREEN_NAME.CART) {
          iconName = focused ? "cart" : "cart-outline";
        } else if (route.name === SCREEN_NAME.CATAGORY) {
          iconName = focused ? "apps" : "apps-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.PROFILE} component={SideMenu} />
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.HOME} component={HomeScreen} />
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.CATAGORY} component={CatagoryScreen} />
    <Tab.Screen options={{ headerShown: false, tabBarBadge: itemCount }} name={SCREEN_NAME.CART} component={CartScreen} />
  </Tab.Navigator>)
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={TabNavigator} />
    <Stack.Screen name={SCREEN_NAME.SEARCH_ITEM} component={SearchItem} />
    <Stack.Screen name={SCREEN_NAME.ORDER} component={MyOrders} />
    <Stack.Screen name={SCREEN_NAME.PAYMENT} component={PaymentScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <MainStackNavigator />
          ) : (
            // SplashScreen component goes here
            <MainStackNavigator />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
