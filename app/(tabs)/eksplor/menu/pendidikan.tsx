// app/eksplor/pendidikan.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function PendidikanScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pendidikan di Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang merupakan pusat pendidikan di Jawa Tengah, dengan berbagai
        institusi pendidikan ternama dari tingkat dasar hingga perguruan tinggi:
      </Text>

      <Text style={styles.heading}>1. Universitas Diponegoro (UNDIP)</Text>
      <Text style={styles.paragraph}>
        Salah satu universitas negeri terbaik di Indonesia dengan berbagai
        program studi unggulan dan fasilitas modern.
      </Text>

      <Text style={styles.heading}>2. Universitas Negeri Semarang (UNNES)</Text>
      <Text style={styles.paragraph}>
        Universitas berbasis konservasi yang menawarkan program studi pendidikan
        dan non-pendidikan dengan fokus pada kelestarian lingkungan.
      </Text>

      <Text style={styles.heading}>
        3. Politeknik Negeri Semarang (Polines)
      </Text>
      <Text style={styles.paragraph}>
        Institusi vokasi unggulan yang fokus pada pengembangan keterampilan
        teknik dan manajemen untuk kebutuhan industri.
      </Text>

      <Text style={styles.heading}>4. Sekolah-sekolah Favorit</Text>
      <Text style={styles.paragraph}>
        Beragam sekolah dasar dan menengah unggulan, termasuk sekolah negeri dan
        swasta berbasis agama dan internasional.
      </Text>

      <Text style={styles.heading}>5. Lembaga Pendidikan Non-Formal</Text>
      <Text style={styles.paragraph}>
        Banyak lembaga kursus dan pelatihan yang menawarkan program pengembangan
        diri, bahasa, seni, dan keterampilan teknis untuk segala usia.
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
