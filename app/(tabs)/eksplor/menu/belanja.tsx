import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const pusatBelanja = [
  {
    name: "Paragon City Mall",
    description: "Salah satu mal terbesar di Semarang dengan brand ternama, food court, bioskop, dan hotel bintang lima."
  },
  {
    name: "DP Mall",
    description: "Mall modern yang terletak strategis di pusat kota, dekat Tugu Muda, dengan tenant fashion dan kuliner yang lengkap."
  },
  {
    name: "Java Mall",
    description: "Pusat perbelanjaan yang telah lama menjadi favorit warga lokal, dengan banyak pilihan toko dan supermarket besar."
  },
  {
    name: "Pasar Johar",
    description: "Pasar tradisional legendaris yang telah direvitalisasi. Dikenal sebagai pusat grosir tekstil, batik, dan kuliner lokal."
  },
  {
    name: "Semawis Night Market",
    description: "Pasar malam yang menawarkan berbagai kuliner khas Semarang, mulai dari lumpia, tahu gimbal, hingga wingko babat."
  }
];

export default function BelanjaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pusat Perbelanjaan di Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang memiliki beragam pusat perbelanjaan, dari mal modern
        hingga pasar tradisional bersejarah yang patut untuk dikunjungi:
      </Text>

      {pusatBelanja.map((item, index) => (
        <ScrollView key={index}>
          <Text style={styles.heading}>{`${index + 1}. ${item.name}`}</Text>
          <Text style={styles.paragraph}>{item.description}</Text>
        </ScrollView>
      ))}

      <Pressable onPress={() => router.replace('/eksplor')} style={styles.buttonBack}>
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