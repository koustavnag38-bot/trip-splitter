import type { CapacitorConfig } from '@capacitor/cli';

const appUrl = process.env.TRIPTOGETHER_URL;
if (!appUrl || !/^https:\/\//i.test(appUrl)) {
  throw new Error('Set TRIPTOGETHER_URL to your deployed HTTPS TripTogether website before building the Android app.');
}

const config: CapacitorConfig = {
  appId: 'com.triptogether.app',
  appName: 'TripTogether',
  webDir: 'public',
  server: {
    // The Android app loads the hosted website so PWA and APK use the same backend/data.
    url: appUrl,
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
