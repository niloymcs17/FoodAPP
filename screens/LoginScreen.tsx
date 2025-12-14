import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInUser, registerUser } from '../services/firebaseService';
import { Color, FontSize } from '../GlobalStyles';
import { SCREEN_NAME } from '../Const/ScreenName.const';
import ErrorPopup from '../modals/ErrorPopup';
import SuccessPopup from '../modals/SuccessPopup';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please fill in all fields');
      setShowErrorPopup(true);
      return;
    }

    if (!isLogin && !displayName.trim()) {
      setErrorMessage('Please enter your name');
      setShowErrorPopup(true);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setShowErrorPopup(true);
      return;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      setShowErrorPopup(true);
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Sign in
        await signInUser(email.trim(), password);
        // Navigation will be handled by auth state change in App.tsx
      } else {
        // Register
        await registerUser(email.trim(), password, displayName.trim());
        setShowSuccessPopup(true);
      }
    } catch (error: any) {
      let errorMessage = 'An error occurred. Please try again.';
      
      if (error.message.includes('auth/user-not-found')) {
        errorMessage = 'No account found with this email. Please sign up.';
      } else if (error.message.includes('auth/wrong-password')) {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.message.includes('auth/email-already-in-use')) {
        errorMessage = 'An account with this email already exists. Please sign in.';
      } else if (error.message.includes('auth/weak-password')) {
        errorMessage = 'Password is too weak. Please use a stronger password.';
      } else if (error.message.includes('auth/invalid-email')) {
        errorMessage = 'Invalid email address. Please check and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setErrorMessage(errorMessage);
      setShowErrorPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Text style={styles.title}>{isLogin ? 'Welcome Back' : 'Create Account'}</Text>
          <Text style={styles.subtitle}>
            {isLogin
              ? 'Sign in to continue to your account'
              : 'Sign up to get started'}
          </Text>

          {!isLogin && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={displayName}
                onChangeText={setDisplayName}
                autoCapitalize="words"
                editable={!loading}
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
              editable={!loading}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoComplete={isLogin ? 'password' : 'password-new'}
              editable={!loading}
            />
          </View>

          <Pressable
            style={[styles.submitButton, loading && styles.submitButtonDisabled]}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={Color.colorWhite} />
            ) : (
              <Text style={styles.submitButtonText}>
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Text>
            )}
          </Pressable>

          <Pressable
            style={styles.switchButton}
            onPress={() => {
              setIsLogin(!isLogin);
              setEmail('');
              setPassword('');
              setDisplayName('');
            }}
            disabled={loading}
          >
            <Text style={styles.switchButtonText}>
              {isLogin
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Sign In'}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <ErrorPopup
        isVisible={showErrorPopup}
        title="Error"
        message={errorMessage}
        onClose={() => setShowErrorPopup(false)}
      />
      <SuccessPopup
        isVisible={showSuccessPopup}
        message="Account created successfully!"
        onClose={() => {
          setShowSuccessPopup(false);
          setIsLogin(true); // Switch to login mode
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    padding: 24,
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontWeight: 'bold',
    color: Color.colorBlack,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FontSize.size_base,
    color: Color.colorLightslategray_100,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.size_base,
    fontWeight: '600',
    color: Color.colorBlack,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderRadius: 8,
    padding: 14,
    fontSize: FontSize.size_base,
    backgroundColor: Color.colorWhite,
    color: Color.colorBlack,
  },
  submitButton: {
    backgroundColor: Color.mainColor,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    minHeight: 50,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 24,
    alignItems: 'center',
    padding: 12,
  },
  switchButtonText: {
    fontSize: FontSize.size_base,
    color: Color.mainColor,
    fontWeight: '500',
  },
});

export default LoginScreen;

