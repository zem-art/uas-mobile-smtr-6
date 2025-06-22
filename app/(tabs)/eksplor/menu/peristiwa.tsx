import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const peristiwaSemarang = [
  {
    name: "Pertempuran Lima Hari di Semarang (15–20 Oktober 1945)",
    description: "Salah satu peristiwa heroik yang terjadi setelah Proklamasi Kemerdekaan. Rakyat Semarang bersama pemuda dan tentara Indonesia bertempur melawan tentara Jepang yang masih ada di kota. Pertempuran ini dipicu oleh penangkapan dan pembunuhan dr. Kariadi serta pengambilalihan senjata di berbagai tempat. Pertempuran berlangsung sengit selama lima hari dan dikenang sebagai simbol keberanian rakyat Semarang."
  },
  {
    name: "Pemberontakan PKI 1948 dan Dampaknya di Semarang",
    description: "Meskipun pusat pemberontakan berada di Madiun, dampak dari gerakan ini turut terasa di Semarang. Pemerintah memperketat pengawasan terhadap kelompok-kelompok politik dan ideologi ekstrem. Semarang menjadi salah satu basis penting dalam pengendalian stabilitas politik di Jawa Tengah."
  },
  {
    name: "Demonstrasi Mahasiswa 1998",
    description: "Seperti kota besar lainnya, Semarang turut menjadi lokasi demonstrasi mahasiswa menuntut reformasi dan turunnya Presiden Soeharto. Aksi-aksi damai dilakukan oleh mahasiswa UNDIP, UNNES, dan kampus-kampus lain, yang menyuarakan demokratisasi dan kebebasan berpendapat."
  },
  {
    name: "Banjir Rob Tahunan",
    description: "Banjir rob (air laut pasang) merupakan fenomena tahunan yang cukup sering melanda wilayah pesisir Semarang, terutama di kawasan Kaligawe, Tanjung Mas, dan Genuk. Pemerintah telah melakukan berbagai upaya penanganan seperti pembangunan tanggul laut dan sistem pompa air."
  },
  {
    name: "Rehabilitasi Kota Lama dan Revitalisasi Warisan Sejarah",
    description: "Dalam beberapa tahun terakhir, pemerintah kota dan pusat melakukan proyek besar untuk menghidupkan kembali Kota Lama Semarang. Proyek ini mencakup perbaikan bangunan tua, peningkatan fasilitas pariwisata, serta penataan kawasan agar menjadi ikon sejarah dan budaya."
  },
  {
    name: "Peresmian Masjid Agung Jawa Tengah (2006)",
    description: "Masjid ini menjadi landmark religius sekaligus simbol toleransi dan kebangkitan spiritual masyarakat Semarang. Masjid dengan arsitektur megah ini juga menjadi destinasi wisata religi favorit."
  }
];

export default function PeristiwaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Peristiwa Penting di Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang menjadi saksi berbagai peristiwa penting dalam sejarah
        Indonesia, baik dalam konteks sosial, politik, budaya, maupun perjuangan
        kemerdekaan. Berikut beberapa peristiwa penting yang pernah terjadi di
        kota ini:
      </Text>

      {peristiwaSemarang.map((item, index) => (
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