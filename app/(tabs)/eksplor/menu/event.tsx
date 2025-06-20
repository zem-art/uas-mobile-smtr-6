// app/eksplor/event.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function EventScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Festival & Acara di Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang memiliki berbagai acara dan festival tahunan yang mencerminkan
        kekayaan budaya dan keberagaman masyarakatnya:
      </Text>

      <Text style={styles.heading}>1. Festival Dugderan</Text>
      <Text style={styles.paragraph}>
        Festival tradisional yang digelar menjelang bulan Ramadan, ditandai
        dengan arak-arakan Warak Ngendog dan pasar rakyat.
      </Text>

      <Text style={styles.heading}>2. Semarang Night Carnival</Text>
      <Text style={styles.paragraph}>
        Parade malam spektakuler dengan kostum-kostum unik dari berbagai
        komunitas seni yang memeriahkan kota setiap tahunnya.
      </Text>

      <Text style={styles.heading}>3. Festival Kota Lama</Text>
      <Text style={styles.paragraph}>
        Rangkaian acara budaya yang menyoroti sejarah dan arsitektur Kota Lama,
        termasuk pertunjukan musik, seni, dan bazar UMKM.
      </Text>

      <Text style={styles.heading}>4. Semarang Great Sale</Text>
      <Text style={styles.paragraph}>
        Event diskon besar-besaran yang diikuti oleh pusat perbelanjaan dan UMKM
        untuk menarik wisatawan dan meningkatkan perekonomian lokal.
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
