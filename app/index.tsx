import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/(tabs)" />;
}
// // If You Want Auto Login Later (Bonus)
// // User login check (AsyncStorage, Supabase, Firebase, etc.)
// const isLoggedIn = await checkLogin();
// return <Redirect href={isLoggedIn ? '/tabs' : '/auth/signin'} />;
