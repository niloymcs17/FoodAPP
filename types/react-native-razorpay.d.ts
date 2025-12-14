declare module 'react-native-razorpay' {
  interface RazorpayOptions {
    description?: string;
    image?: string;
    currency: string;
    key: string;
    amount: number;
    name: string;
    prefill?: {
      email?: string;
      contact?: string;
      name?: string;
    };
    theme?: {
      color?: string;
    };
    order_id?: string;
    notes?: {
      [key: string]: string;
    };
    method?: {
      upi?: boolean;
      card?: boolean;
      netbanking?: boolean;
      wallet?: boolean;
      emi?: boolean;
      paylater?: boolean;
    };
  }

  interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
  }

  interface RazorpayError {
    code: string;
    description: string;
    source?: string;
    step?: string;
    reason?: string;
    metadata?: {
      [key: string]: any;
    };
  }

  class RazorpayCheckout {
    static open(
      options: RazorpayOptions,
      successCallback?: (data: RazorpayResponse) => void,
      errorCallback?: (error: RazorpayError) => void
    ): void;
    // Also support Promise-based API for backward compatibility
    static open(options: RazorpayOptions): Promise<RazorpayResponse>;
  }

  export default RazorpayCheckout;
}

