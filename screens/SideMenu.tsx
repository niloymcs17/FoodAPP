import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, Padding } from "../GlobalStyles";
import { useEffect, useState } from "react";
import { getCurrentUser, onAuthChange, signOutUser, getUserData } from "../services/firebaseService";
import { User } from "firebase/auth";
import ConfirmationPopup from '../modals/ConfirmationPopup';
import ErrorPopup from '../modals/ErrorPopup';

const menuItems = [
  { title: "My Orders", screen: "MyOrders", iconName: "document-text" as const, iconBg: "#FFF4E6" },
  { title: "My Profile", screen: "Profile", iconName: "person" as const, iconBg: "#E8F5E9" },
  { title: "Delivery Address", screen: "DeliveryAddressList", iconName: "location" as const, iconBg: "#E3F2FD" },
  { title: "Payment Methods", screen: null, iconName: "wallet" as const, iconBg: "#F3E5F5" },
  { title: "Contact Us", screen: null, iconName: "mail" as const, iconBg: "#FFF3E0" },
  { title: "Settings", screen: null, iconName: "settings" as const, iconBg: "#F5F5F5" },
  { title: "Helps & FAQs", screen: null, iconName: "help-circle" as const, iconBg: "#E0F7FA" },
];

const SideMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Get current user
    const currentUser = getCurrentUser();
    setUser(currentUser);
    
    // Load user data from Firestore
    if (currentUser) {
      loadUserData(currentUser.uid);
    }

    // Listen to auth state changes
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
      if (authUser) {
        loadUserData(authUser.uid);
      } else {
        setUserData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadUserData = async (userId: string) => {
    try {
      const data = await getUserData(userId);
      setUserData(data);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    setShowLogoutConfirm(false);
    try {
      setLoggingOut(true);
      await signOutUser();
      // Navigation will be handled by auth state change in App.tsx
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to log out');
      setShowErrorPopup(true);
      setLoggingOut(false);
    }
  };

  const handleNavigation = (screen: string | null) => {
    try {
      if (screen) {
        navigation.navigate(screen);
      } else {
        console.warn("Screen not implemented yet");
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const renderItem = ({ item }: { item: typeof menuItems[0] }) => (
    <Pressable
      style={({ pressed }) => [
        styles.menuItem,
        pressed && styles.menuItemPressed
      ]}
      onPress={() => handleNavigation(item.screen)}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.iconBg }]}>
        <Ionicons name={item.iconName} size={22} color={Color.colorBlack} />
      </View>
      <Text style={styles.menuText}>{item.title}</Text>
      {item.screen && (
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.sideMenu}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          {user?.photoURL ? (
            <Image style={styles.profileIcon} contentFit="cover" source={{ uri: user.photoURL }} />
          ) : (
            <Image style={styles.profileIcon} contentFit="cover" source={require("../assets/profile.png")} />
          )}
        </View>
        <View style={styles.userInfo}>
          {loading ? (
            <ActivityIndicator size="small" color={Color.mainColor} />
          ) : (
            <>
              <Text style={styles.userName}>
                {userData?.displayName || user?.displayName || 'User'}
              </Text>
              <Text style={styles.userEmail}>
                {user?.email || 'No email'}
              </Text>
            </>
          )}
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.menuList}
        showsVerticalScrollIndicator={false}
      />
      
      <View style={styles.divider} />
      
      <Pressable
        style={({ pressed }) => [
          styles.logoutButton,
          pressed && styles.logoutButtonPressed,
          loggingOut && styles.logoutButtonDisabled
        ]}
        onPress={handleLogout}
        disabled={loggingOut}
      >
        {loggingOut ? (
          <ActivityIndicator color={Color.colorWhite} />
        ) : (
          <>
            <Text style={styles.logoutText}>Log Out</Text>
            <Ionicons name="log-out-outline" size={20} color={Color.colorWhite} />
          </>
        )}
      </Pressable>
      <ConfirmationPopup
        isVisible={showLogoutConfirm}
        title="Log Out"
        message="Are you sure you want to log out?"
        confirmText="Log Out"
        cancelText="Cancel"
        confirmButtonColor="#FF3B30"
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutConfirm(false)}
      />
      <ErrorPopup
        isVisible={showErrorPopup}
        title="Error"
        message={errorMessage}
        onClose={() => setShowErrorPopup(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 20,
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
    borderWidth: 3,
    borderColor: Color.colorWhite,
    shadowColor: Color.colorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileIcon: {
    width: "100%",
    height: "100%",
  },
  userInfo: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    color: Color.colorBlack,
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  userEmail: {
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray_100,
    fontWeight: "400",
  },
  divider: {
    height: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    marginVertical: 8,
  },
  menuList: {
    flexGrow: 1,
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 4,
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: "transparent",
  },
  menuItemPressed: {
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorWhitesmoke_100,
    transform: [{ scale: 0.98 }],
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  menuText: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontWeight: "500",
    flex: 1,
    letterSpacing: 0.2,
  },
  arrowContainer: {
    marginLeft: 8,
  },
  arrow: {
    fontSize: 20,
    color: Color.colorLightslategray_100,
    fontWeight: "300",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.mainColor,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 8,
    shadowColor: Color.mainColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  logoutButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  logoutButtonDisabled: {
    opacity: 0.6,
  },
  logoutText: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontWeight: "600",
    marginRight: 8,
    letterSpacing: 0.5,
  },
});

export default SideMenu;
