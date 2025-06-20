import { Colors } from "@/utils/Colors";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
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
        <Pressable
          style={styles.buttonBlue}
          onPress={() => router.push("/eksplor/profile")}
        >
          <Text style={styles.buttonText}>Lihat Detail</Text>
        </Pressable>
        <Pressable
          style={styles.buttonGreen}
          onPress={() => router.push("/eksplor")}
        >
          <Text style={styles.buttonText}>Eksplor Destinasi</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#222",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 16,
  },
  buttonBlue: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonGreen: {
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
