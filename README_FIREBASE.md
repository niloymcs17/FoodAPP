# Firebase Setup Guide

This project uses Firebase for authentication, databases (Firestore & Realtime Database), and storage.

## Initial Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Authentication, Firestore Database, Realtime Database, and Storage

2. **Get Your Firebase Configuration**
   - In Firebase Console, go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click on the Web app icon (`</>`) to add a web app
   - Copy the configuration values

3. **Set Up Environment Variables**
   - Copy `.env.example` to `.env` in the root directory
   - Fill in your Firebase configuration values:
     ```
     EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key_here
     EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
     EXPO_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
     ```

4. **Enable Firebase Services**

   **Authentication:**
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider

   **Firestore Database:**
   - Go to Firestore Database
   - Click "Create database"
   - Start in test mode (you can add security rules later)
   - Choose a location for your database

   **Realtime Database:**
   - Go to Realtime Database
   - Click "Create database"
   - Start in test mode (you can add security rules later)
   - Choose a location (usually same as Firestore)
   - Copy the Database URL (format: `https://your-project-id-default-rtdb.firebaseio.com/`)
   - Add this URL to your `.env` file as `EXPO_PUBLIC_FIREBASE_DATABASE_URL`

   **Storage:**
   - Go to Storage
   - Click "Get started"
   - Start in test mode (you can add security rules later)
   - Choose a location for your storage

## Security Rules

### Firestore Security Rules
Update your Firestore rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      // User's addresses subcollection
      // Structure: users/{userId}/addresses/{addressId}
      match /addresses/{addressId} {
        // Users can create their own addresses
        allow create: if request.auth != null && 
                       request.auth.uid == userId &&
                       request.resource.data.userId == request.auth.uid;
        
        // Users can read their own addresses
        allow read: if request.auth != null && request.auth.uid == userId;
        
        // Users can update their own addresses
        allow update: if request.auth != null && 
                       request.auth.uid == userId &&
                       resource.data.userId == request.auth.uid &&
                       request.resource.data.userId == request.auth.uid;
        
        // Users can delete their own addresses
        allow delete: if request.auth != null && request.auth.uid == userId;
      }
    }
    
    // Orders collection at root level
    // Structure: orders/{userId}/orders/{orderId}
    match /orders/{userId} {
      // Users can only access their own orders
      allow read: if request.auth != null && request.auth.uid == userId;
      
      // User's orders subcollection
      match /orders/{orderId} {
        // Users can create their own orders
        allow create: if request.auth != null && 
                       request.auth.uid == userId &&
                       request.resource.data.userId == request.auth.uid;
        
        // Users can read their own orders
        allow read: if request.auth != null && request.auth.uid == userId;
        
        // Users can update their own orders (for cancelling - status updates only)
        // Allow update only if:
        // 1. User owns the order
        // 2. Only status and updatedAt fields can be changed
        // 3. Status must be a valid order status
        allow update: if request.auth != null && 
                       request.auth.uid == userId &&
                       resource.data.userId == request.auth.uid &&
                       request.resource.data.userId == request.auth.uid &&
                       // Only status and updatedAt can be changed
                       request.resource.data.diff(resource.data).affectedKeys().hasOnly(['status', 'updatedAt']) &&
                       // Status must be valid
                       request.resource.data.status is string &&
                       request.resource.data.status in ['pending', 'processing', 'on the way', 'delivered', 'cancelled'];
        
        // Users cannot delete orders
        allow delete: if false;
      }
    }
  }
}
```

### Realtime Database Security Rules
Update your Realtime Database rules in Firebase Console:

```json
{
  "rules": {
    "users": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    },
    "orders": {
      "$userId": {
        ".read": "$userId === auth.uid",
        "$orderId": {
          ".write": "$userId === auth.uid && (!data.exists() || data.child('userId').val() === auth.uid)"
        }
      }
    },
    "carts": {
      "$userId": {
        ".read": "$userId === auth.uid",
        ".write": "$userId === auth.uid"
      }
    },
    "addresses": {
      "$userId": {
        ".read": "$userId === auth.uid",
        "$addressId": {
          ".write": "$userId === auth.uid && (!data.exists() || data.child('userId').val() === auth.uid)"
        }
      }
    },
    "presence": {
      "$userId": {
        ".read": true,
        ".write": "$userId === auth.uid"
      }
    }
  }
}
```

### Storage Security Rules
Update your Storage rules in Firebase Console:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can only upload/read their own files
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read access for product images
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Usage Examples

### Authentication
```typescript
import { registerUser, signInUser, signOutUser } from './services/firebaseService';

// Register a new user
await registerUser('user@example.com', 'password123', 'John Doe');

// Sign in
await signInUser('user@example.com', 'password123');

// Sign out
await signOutUser();
```

### Firestore
```typescript
import { getUserData, updateUserData } from './services/firebaseService';

// Get user data
const userData = await getUserData(userId);

// Update user data
await updateUserData(userId, { displayName: 'John Doe' });
```

### Orders (Firestore)
```typescript
import { createOrder, getUserOrders, updateOrderStatus, listenToUserOrders, getOrderById, deleteOrder, OrderStatus } from './services/firebaseService';

// Create an order (saved to Firestore at users/{userId}/orders/{orderId})
await createOrder({
  items: [...],
  total: 100,
  address: {...}
});

// Get user orders (from Firestore)
const orders = await getUserOrders(userId);

// Get specific order
const order = await getOrderById(userId, orderId);

// Update order status
// Available statuses: 'pending' | 'processing' | 'on the way' | 'delivered' | 'cancelled'
await updateOrderStatus(orderId, 'processing');
await updateOrderStatus(orderId, 'on the way');
await updateOrderStatus(orderId, 'delivered');

// Delete order
await deleteOrder(orderId);

// Listen to orders in real-time
const unsubscribe = listenToUserOrders(userId, (orders) => {
  console.log('Orders updated:', orders);
});
```

### Realtime Database
```typescript
import {
  writeRealtimeData,
  readRealtimeData,
  listenToRealtimeData,
  createRealtimeOrder,
  listenToUserOrders,
  saveUserCart,
  listenToUserCart,
} from './services/firebaseService';

// Write data
await writeRealtimeData('users/user123', { name: 'John', email: 'john@example.com' });

// Read data
const userData = await readRealtimeData('users/user123');

// Listen to real-time changes
const unsubscribe = listenToRealtimeData('orders/user123', (data) => {
  console.log('Orders updated:', data);
});

// Create order in Realtime Database
const orderId = await createRealtimeOrder({
  items: [...],
  total: 100,
});

// Listen to user orders in real-time
const unsubscribeOrders = listenToUserOrders(userId, (orders) => {
  console.log('Orders:', orders);
});

// Save cart to Realtime Database
await saveUserCart({ items: [...], total: 50 });

// Listen to cart changes
const unsubscribeCart = listenToUserCart(userId, (cart) => {
  console.log('Cart updated:', cart);
});
```

### Storage
```typescript
import { uploadImage } from './services/firebaseService';

// Upload an image
const imageUrl = await uploadImage(imageUri, `users/${userId}/profile.jpg`);
```

## Available Services

The Firebase service file (`services/firebaseService.ts`) provides:

### Authentication
- registerUser, signInUser, signOutUser, resetPassword, getCurrentUser, onAuthChange

### Firestore Database
- **Users**: getUserData, updateUserData
- **Addresses**: addUserAddress, getUserAddresses, updateUserAddress, deleteUserAddress
- **Orders**: createOrder, getUserOrders, getOrderById, updateOrderStatus, deleteOrder, listenToUserOrders
  - **Order Status Types**: `'pending' | 'processing' | 'on the way' | 'delivered' | 'cancelled'`
  - **Note**: Cart should be stored locally (Redux), not in database

### Realtime Database
- **Basic Operations**: writeRealtimeData, readRealtimeData, updateRealtimeData, deleteRealtimeData, pushRealtimeData
- **Real-time Listeners**: listenToRealtimeData, listenToChildAdded, listenToChildChanged, listenToChildRemoved
- **Queries**: queryRealtimeData (with filters: orderBy, equalTo, startAt, endAt, limitToFirst, limitToLast)
- **Presence**: setUserOnline, setUserOffline
- **Note**: Orders are now stored in Firestore, not Realtime Database
- **Note**: Cart functions are deprecated - use Redux for cart management

### Storage
- uploadImage, deleteImage

## Troubleshooting

1. **"Firebase: Error (auth/api-key-not-valid)"**
   - Check that your API key is correct in `.env`
   - Make sure you're using the Web app configuration, not iOS/Android

2. **"Firestore permission denied"**
   - Check your Firestore security rules
   - Ensure the user is authenticated

3. **"Storage permission denied"**
   - Check your Storage security rules
   - Ensure the user is authenticated

4. **Environment variables not loading**
   - Restart your Expo development server after creating/updating `.env`
   - Make sure variable names start with `EXPO_PUBLIC_`

