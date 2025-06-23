import { Stack } from 'expo-router';

export default function AuthLayout() {
  console.log("Current layout loaded auth");
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        animation: "fade_from_bottom"
      }}
    >
      <Stack.Screen name="signin" options={{ title: "Sign In" }}/>
      <Stack.Screen name="signup" options={{ title: "Sign Up" }}/>
    </Stack>
  );
}