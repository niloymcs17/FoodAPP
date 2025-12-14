// Payment Service - Razorpay Payment Processing
import { Platform, NativeModules } from 'react-native';
import { User } from 'firebase/auth';

// Conditionally import Razorpay (only for native platforms)
let RazorpayCheckout: any = null;

// Function to initialize Razorpay (called at module load and can be called again)
function initializeRazorpay() {
  if (Platform.OS === 'web') {
    console.log('Razorpay: Web platform detected, skipping initialization');
    return;
  }

  try {
    console.log('Razorpay: Attempting to load module...');
    
    // Check if native module is available
    if (!NativeModules.RNRazorpayCheckout) {
      console.warn('Razorpay: Native module RNRazorpayCheckout is not available. The native module needs to be properly linked.');
      console.warn('Razorpay: Please rebuild the app with: npx expo prebuild --clean && npx expo run:android');
      RazorpayCheckout = null;
      return;
    }
    
    console.log('Razorpay: Native module RNRazorpayCheckout is available');
    
    const RazorpayModule = require('react-native-razorpay');
    RazorpayCheckout = RazorpayModule.default || RazorpayModule;
    
    console.log('Razorpay: Module loaded, type:', typeof RazorpayCheckout);
    console.log('Razorpay: Has open method?', typeof RazorpayCheckout?.open);
    
    // Verify it has the open method
    if (!RazorpayCheckout || typeof RazorpayCheckout.open !== 'function') {
      console.warn('Razorpay: Module loaded but open method not available');
      RazorpayCheckout = null;
    } else {
      console.log('Razorpay: Successfully initialized');
    }
  } catch (error: any) {
    console.warn('Razorpay: Failed to load module:', error?.message);
    RazorpayCheckout = null;
  }
}

// Initialize on module load
initializeRazorpay();

// Razorpay Key ID - can be overridden by environment variable
const RAZORPAY_KEY_ID = process.env.EXPO_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_O9jS9mVFfS8wNL';

/**
 * Process payment using Razorpay
 * @param amount - Amount in rupees
 * @param user - Firebase Auth user object
 * @param userData - Optional Firestore user data (for phone number, etc.)
 * @returns Promise that resolves with payment data or rejects with error
 */
export default function processPayment(amount: number, user: User, userData?: any): Promise<any> {
  console.log('processPayment called with amount:', amount);
  console.log('Platform:', Platform.OS);
  
  // Try to reinitialize if not available
  if (!RazorpayCheckout) {
    console.log('RazorpayCheckout is null, attempting to reinitialize...');
    initializeRazorpay();
  }
  
  // Check if Razorpay is available
  if (!RazorpayCheckout) {
    console.error('RazorpayCheckout is not available after initialization');
    return Promise.reject(new Error('Razorpay is not available on this platform. Please ensure the native module is properly linked and rebuild the app.'));
  }

  console.log('RazorpayCheckout is available');

  // Check if running on web
  if (Platform.OS === 'web') {
    return Promise.reject(new Error('Razorpay payment is not available on web. Please use the mobile app for payments.'));
  }

  // Validate Razorpay key
  if (!RAZORPAY_KEY_ID || RAZORPAY_KEY_ID.includes('YOUR_RAZORPAY_KEY_ID')) {
    return Promise.reject(new Error('Razorpay Key ID is not configured. Please set EXPO_PUBLIC_RAZORPAY_KEY_ID in your .env file.'));
  }

  console.log('Razorpay Key ID:', RAZORPAY_KEY_ID.substring(0, 10) + '...');

  // Configure Razorpay options
  const options = {
    description: 'Food Order Payment',
    currency: 'INR',
    key: RAZORPAY_KEY_ID,
    amount: Math.round(amount * 100), // Convert to paise (multiply by 100)
    name: 'Food App',
    prefill: {
      email: user?.email || '',
      contact: userData?.phone || '',
      name: user?.displayName || userData?.displayName || '',
    },
    method: {
      upi: true,
      card: false,
      netbanking: false,
      wallet: false,
      emi: false,
      paylater: false,
    },
  };

  console.log('Razorpay options:', {
    ...options,
    key: options.key.substring(0, 10) + '...', // Don't log full key
  });

  // Return Promise - RazorpayCheckout.open always returns a Promise
  console.log('Opening Razorpay checkout...');
  
  // Double-check RazorpayCheckout is available right before use
  if (!RazorpayCheckout) {
    console.error('RazorpayCheckout became null at runtime');
    return Promise.reject(new Error('Razorpay is not available. Please ensure the native module is properly linked.'));
  }

  if (typeof RazorpayCheckout.open !== 'function') {
    console.error('RazorpayCheckout.open is not a function:', typeof RazorpayCheckout.open);
    return Promise.reject(new Error('Razorpay open method is not available. Please rebuild the app.'));
  }

  // Check if native module is actually available
  if (!NativeModules.RNRazorpayCheckout) {
    console.error('NativeModules.RNRazorpayCheckout is null - native module not linked');
    return Promise.reject(new Error('Razorpay native module is not linked. Please rebuild the app with: npx expo prebuild --clean && npx expo run:android'));
  }

  console.log('NativeModules.RNRazorpayCheckout is available');

  return new Promise((resolve, reject) => {
    // Add timeout to prevent infinite loading (30 seconds)
    const timeout = setTimeout(() => {
      console.error('Payment timeout: Razorpay did not respond within 30 seconds');
      reject(new Error('Payment timeout: Razorpay did not respond within 30 seconds'));
    }, 30000);

    try {
      // Final check right before calling open()
      if (!RazorpayCheckout) {
        clearTimeout(timeout);
        console.error('RazorpayCheckout is null right before calling open()');
        reject(new Error('Razorpay native module is not available. Please rebuild the app with: npx expo prebuild --clean && npx expo run:android'));
        return;
      }

      if (typeof RazorpayCheckout.open !== 'function') {
        clearTimeout(timeout);
        console.error('RazorpayCheckout.open is not a function. Type:', typeof RazorpayCheckout.open);
        console.error('RazorpayCheckout object:', RazorpayCheckout);
        reject(new Error('Razorpay open method is not available. The native module may not be properly linked.'));
        return;
      }

      // Use Promise-based API (recommended)
      console.log('Calling RazorpayCheckout.open with options...');
      console.log('RazorpayCheckout type:', typeof RazorpayCheckout);
      console.log('RazorpayCheckout.open type:', typeof RazorpayCheckout.open);
      
      const paymentPromise = RazorpayCheckout.open(options);
      
      if (!paymentPromise) {
        clearTimeout(timeout);
        console.error('RazorpayCheckout.open returned null/undefined');
        reject(new Error('Razorpay did not return a Promise. The native module may not be properly initialized.'));
        return;
      }

      if (typeof paymentPromise.then !== 'function') {
        clearTimeout(timeout);
        console.error('RazorpayCheckout.open did not return a Promise. Returned:', typeof paymentPromise);
        reject(new Error('Razorpay did not return a valid Promise. Please check native module integration.'));
        return;
      }
      
      console.log('Razorpay checkout opened, waiting for response...');
      
      paymentPromise
        .then((data: any) => {
          clearTimeout(timeout);
          console.log('Payment successful:', data);
          resolve(data);
        })
        .catch((error: any) => {
          clearTimeout(timeout);
          console.error('Payment failed:', error);
          console.error('Error code:', error?.code);
          console.error('Error description:', error?.description);
          console.error('Error message:', error?.message);
          console.error('Full error:', JSON.stringify(error, null, 2));
          
          // Check if this is a native module linking error
          const errorMessage = error?.message || '';
          if (errorMessage.includes('Cannot read property') && errorMessage.includes('of null')) {
            const betterError = new Error('Razorpay native module is not properly linked. Please rebuild the app with: npx expo prebuild --clean && npx expo run:android');
            reject(betterError);
          } else {
            reject(error);
          }
        });
    } catch (error: any) {
      clearTimeout(timeout);
      console.error('Error opening Razorpay:', error);
      console.error('Error message:', error?.message);
      console.error('Error stack:', error?.stack);
      reject(new Error(`Failed to open Razorpay: ${error?.message || 'Unknown error'}. Please ensure the native module is properly linked.`));
    }
  });
}

