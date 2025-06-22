import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const wisataAlam = [
  {
    name: "Umbul Sidomukti",
    description: "Resort dan area wisata alam di lereng Gunung Ungaran, menawarkan kolam renang di tepi tebing dengan pemandangan luar biasa."
  },
  {
    name: "Goa Kreo",
    description: "Goa yang diyakini sebagai tempat pertapaan Sunan Kalijaga. Dikelilingi bendungan Jatibarang dan dihuni kera-kera liar yang jinak."
  },
  {
    name: "Brown Canyon",
    description: "Bekas area galian tambang yang kini menyerupai Grand Canyon versi mini. Spot foto yang populer di kalangan wisatawan lokal."
  },
  {
    name: "Pantai Marina",
    description: "Pantai buatan dengan pemandangan sunset indah. Cocok untuk rekreasi keluarga dan aktivitas santai di pinggir kota."
  },
  {
    name: "Taman Hutan Raya (Tahura) Raden Soerjo",
    description: "Hutan lindung yang luas dengan berbagai jenis flora dan fauna. Terdapat jalur trekking, area piknik, dan spot foto menarik."
  }
];

export default function AlamScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wisata Alam di Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang memiliki keindahan alam yang tak kalah menarik dari kota-kota
        wisata lainnya. Berikut beberapa destinasi wisata alam yang bisa kamu
        eksplorasi:
      </Text>

      {wisataAlam.map((item, index) => (
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