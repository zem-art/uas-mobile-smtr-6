import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const pendidikanSemarang = [
  {
    name: "Universitas Diponegoro (UNDIP)",
    description: "Salah satu universitas negeri terbaik di Indonesia dengan berbagai program studi unggulan dan fasilitas modern."
  },
  {
    name: "Universitas Negeri Semarang (UNNES)",
    description: "Universitas berbasis konservasi yang menawarkan program studi pendidikan dan non-pendidikan dengan fokus pada kelestarian lingkungan."
  },
  {
    name: "Politeknik Negeri Semarang (Polines)",
    description: "Institusi vokasi unggulan yang fokus pada pengembangan keterampilan teknik dan manajemen untuk kebutuhan industri."
  },
  {
    name: "Sekolah-sekolah Favorit",
    description: "Beragam sekolah dasar dan menengah unggulan, termasuk sekolah negeri dan swasta berbasis agama dan internasional."
  },
  {
    name: "Lembaga Pendidikan Non-Formal",
    description: "Banyak lembaga kursus dan pelatihan yang menawarkan program pengembangan diri, bahasa, seni, dan keterampilan teknis untuk segala usia."
  }
];

export default function PendidikanScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pendidikan di Jakarta</Text>
      <Text style={styles.paragraph}>
        Jakarta merupakan pusat pendidikan di Indonesia, dengan berbagai
        institusi pendidikan ternama dari tingkat dasar hingga perguruan tinggi:
      </Text>

      {pendidikanSemarang.map((item, index) => (
        <View key={index}>
          <Text style={styles.heading}>{`${index + 1}. ${item.name}`}</Text>
          <Text style={styles.paragraph}>{item.description}</Text>
        </View>
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