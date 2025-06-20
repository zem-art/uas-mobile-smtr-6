// app/eksplor/belanja.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function BelanjaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pusat Perbelanjaan di Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang memiliki beragam pusat perbelanjaan, dari mal modern
        hingga pasar tradisional bersejarah yang patut untuk dikunjungi:
      </Text>

      <Text style={styles.heading}>1. Paragon City Mall</Text>
      <Text style={styles.paragraph}>
        Salah satu mal terbesar di Semarang dengan brand ternama, food court,
        bioskop, dan hotel bintang lima.
      </Text>

      <Text style={styles.heading}>2. DP Mall</Text>
      <Text style={styles.paragraph}>
        Mall modern yang terletak strategis di pusat kota, dekat Tugu Muda,
        dengan tenant fashion dan kuliner yang lengkap.
      </Text>

      <Text style={styles.heading}>3. Java Mall</Text>
      <Text style={styles.paragraph}>
        Pusat perbelanjaan yang telah lama menjadi favorit warga lokal, dengan
        banyak pilihan toko dan supermarket besar.
      </Text>

      <Text style={styles.heading}>4. Pasar Johar</Text>
      <Text style={styles.paragraph}>
        Pasar tradisional legendaris yang telah direvitalisasi. Dikenal sebagai
        pusat grosir tekstil, batik, dan kuliner lokal.
      </Text>

      <Text style={styles.heading}>5. Semawis Night Market</Text>
      <Text style={styles.paragraph}>
        Pasar malam yang menawarkan berbagai kuliner khas Semarang, mulai dari
        lumpia, tahu gimbal, hingga wingko babat.
      </Text>

      <Pressable onPress={() => router.back()} style={styles.buttonBack}>
        <Text style={styles.buttonText}>← Kembali</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#800000",
    textAlign: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#333",
  },
  paragraph: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
  buttonBack: {
    marginTop: 32,
    backgroundColor: "#2563EB",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
