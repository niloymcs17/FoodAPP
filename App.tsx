import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { View, ActivityIndicator } from 'react-native';

// Polyfill for setImmediate (needed for react-native-swiper on web)
if (typeof setImmediate === 'undefined') {
  (global as any).setImmediate = (fn: Function, ...args: any[]) => {
    return setTimeout(fn, 0, ...args);
  };
  (global as any).clearImmediate = clearTimeout;
}

// React 19 compatibility workaround for React Navigation
// Suppress the element.ref warning until React Navigation is fully compatible
if (typeof console !== 'undefined' && console.warn) {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Accessing element.ref was removed in React 19')
    ) {
      // Suppress this specific warning
      return;
    }
    originalWarn.apply(console, args);
  };
}



// Initialize Firebase
import './config/firebase';

import { store } from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import MyOrders from "./screens/MyOrders";
import SearchItem from "./screens/SearchItem";
import CartScreen from "./screens/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import AddNewAddress from "./screens/AddNewAddress";
import DeliveryAddressList from "./screens/DeliveryAddressList";
import LoginScreen from "./screens/LoginScreen";
import { SCREEN_NAME } from "./Const/ScreenName.const";
import { selectCartItemsCount } from "./store/cartSlice";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SideMenu from "./screens/SideMenu";
import { onAuthChange, getCurrentUser } from "./services/firebaseService";
import { User } from "firebase/auth";
import { retryPendingOrders } from "./services/orderStorageService";

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
        let iconName: keyof typeof Ionicons.glyphMap = "home";

        if (route.name === SCREEN_NAME.HOME) {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === SCREEN_NAME.PROFILE) {
          iconName = focused ? "person" : "person-outline";
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
    <Tab.Screen options={{ headerShown: false, tabBarBadge: itemCount }} name={SCREEN_NAME.CART} component={CartScreen} />
    <Tab.Screen options={{ headerShown: false }} name={SCREEN_NAME.PROFILE} component={SideMenu} />
  </Tab.Navigator>)
};

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={TabNavigator} />
    <Stack.Screen name={SCREEN_NAME.SEARCH_ITEM} component={SearchItem} />
    <Stack.Screen name={SCREEN_NAME.ORDER} component={MyOrders} />
    <Stack.Screen name={SCREEN_NAME.PAYMENT} component={PaymentScreen} />
    <Stack.Screen name="DeliveryAddressList" component={DeliveryAddressList} />
    <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
  </Stack.Navigator>
);

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial auth state
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);

    // Listen to auth state changes
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
      setLoading(false);
      
      // Retry pending orders when user is authenticated
      if (authUser) {
        retryPendingOrders().catch(error => {
          console.error('Error retrying pending orders:', error);
        });
      }
    });

    // Retry pending orders on app start if user is authenticated
    if (currentUser) {
      retryPendingOrders().catch(error => {
        console.error('Error retrying pending orders on app start:', error);
      });
    }

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        </SafeAreaProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {user ? <MainStackNavigator /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
