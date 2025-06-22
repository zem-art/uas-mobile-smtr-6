import { Colors } from "@/utils/Colors";
import { IconSymbol } from "@/utils/IconSymbol";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomePage() {
  const router = useRouter();
  const scaleAnim1 = useRef(new Animated.Value(1)).current;
  const scaleAnim2 = useRef(new Animated.Value(1)).current;

  const handlePressIn = (scaleAnim: any) => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleAnim: any) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const blinkAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const blinkingColor = blinkAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.background, Colors.blue], // dari putih ke merah
  });


  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <Animated.View style={[styles.loginButton, { backgroundColor: blinkingColor, borderRadius: 10, padding: 5 }]}>
        <TouchableOpacity onPress={() => router.push("/(auth)/signin")}>
          <IconSymbol lib="Feather" name="log-in" size={24} color="#000" />
        </TouchableOpacity>
      </Animated.View>

      <Image
        source={require("@/assets/images/lambang_Kota_Semarang.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Profil Kota Semarang</Text>
      <Text style={styles.description}>
        Semarang adalah ibu kota Provinsi Jawa Tengah. Kota ini dikenal dengan
        Kota Lama, Lawang Sewu, dan kuliner lumpia.
      </Text>
      <View style={styles.buttonGroup}>
        <Animated.View style={{ transform: [{ scale: scaleAnim1 }] }}>
          <TouchableOpacity
            style={[styles.buttonBlue, styles.buttonShadow]}
            onPressIn={() => handlePressIn(scaleAnim1)}
            onPressOut={() => handlePressOut(scaleAnim1)}
            onPress={() => router.replace("/eksplor/profile")}
          >
            <IconSymbol
              lib="Feather"
              name="info"
              size={20}
              color={Colors.background}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Lihat Detail</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: scaleAnim2 }] }}>
          <TouchableOpacity
            style={[styles.buttonGreen, styles.buttonShadow]}
            onPressIn={() => handlePressIn(scaleAnim2)}
            onPressOut={() => handlePressOut(scaleAnim2)}
            onPress={() => router.replace("/eksplor")}
          >
            <IconSymbol
              lib="FontAwesome6"
              name="wpexplorer"
              size={19}
              color={Colors.background}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Eksplor Destinasi</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    position: "absolute",
    top: 40,
    right: 15,
    zIndex: 10,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 22,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 16,
  },
  buttonBlue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonGreen: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.blue,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
