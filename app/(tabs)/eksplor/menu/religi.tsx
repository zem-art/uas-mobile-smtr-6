// app/eksplor/religi.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function ReligiScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Wisata Religi di Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang dikenal sebagai kota multikultural yang memiliki banyak tempat
        ibadah bersejarah dan unik. Berikut beberapa destinasi wisata religi
        yang wajib dikunjungi:
      </Text>

      <Text style={styles.heading}>1. Sam Poo Kong</Text>
      <Text style={styles.paragraph}>
        Klenteng bersejarah tempat persinggahan Laksamana Cheng Ho yang
        terkenal, mencerminkan akulturasi budaya Tionghoa dan Jawa.
      </Text>

      <Text style={styles.heading}>2. Masjid Agung Jawa Tengah</Text>
      <Text style={styles.paragraph}>
        Masjid megah dengan arsitektur perpaduan Jawa, Arab, dan Romawi.
        Memiliki payung raksasa otomatis seperti di Masjid Nabawi.
      </Text>

      <Text style={styles.heading}>3. Gereja Blenduk</Text>
      <Text style={styles.paragraph}>
        Gereja Kristen tertua di Jawa Tengah, bergaya arsitektur Eropa klasik
        dengan kubah besar ikonik.
      </Text>

      <Text style={styles.heading}>4. Klenteng Tay Kak Sie</Text>
      <Text style={styles.paragraph}>
        Klenteng tua di Pecinan Semarang yang masih aktif digunakan dan menjadi
        pusat budaya Tionghoa di kota ini.
      </Text>

      <Text style={styles.heading}>5. Vihara Buddhagaya Watugong</Text>
      <Text style={styles.paragraph}>
        Vihara terbesar di Jawa Tengah dengan patung Buddha raksasa dan
        arsitektur yang megah, menjadi pusat kegiatan keagamaan umat Buddha.
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
