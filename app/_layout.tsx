import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'index') {
            iconName = 'home';
          } else if (route.name === 'settings') {
            iconName = 'settings';
          } else {
            iconName = 'ellipse';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        }
      })}
    />
  );
}
