import { Tabs } from "expo-router";
import { Colors } from "../../utils/Colors";
import { IconSymbol } from "../../utils/IconSymbol";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<string, any> = {
          index: 'book_open',
          eksplor: 'appstore1',
        };
        const libMap: Record<string, "MaterialIcons" | "AntDesign" | "FontAwesome" | "FontAwesome6" | "Feather" | "Entypo" | "Ionicons"> = {
          index: "Feather",
          eksplor: "AntDesign",
          // tambahkan lainnya sesuai kebutuhan
        };
        
        const routeName = route.name;
        const libName = libMap[routeName]; // hasilnya bisa langsung diakses
        const iconName = icons[routeName]; // dari kode kamu
        return <IconSymbol lib={libName} name={iconName} size={24} color={Colors.primary} />;
      },
      tabBarActiveTintColor:`${Colors.primary}`,
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,
    })} />
  );
}


