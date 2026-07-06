import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

// !!! REPLACE THESE WITH YOUR ACTUAL SUPABASE CREDENTIALS !!!
const supabaseUrl = 'https://ywlqbiymjzuguzaqjqyd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bHFiaXltanp1Z3V6YXFqcXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNDQ2MDksImV4cCI6MjA5ODYyMDYwOX0.JY50x0viJRpgP1zRi9Xfs5lP3Qt3YY6z3C0ylrNCd6M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});