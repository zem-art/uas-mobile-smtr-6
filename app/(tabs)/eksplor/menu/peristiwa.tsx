// app/eksplor/peristiwa.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

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

      <Text style={styles.heading}>
        1. Pertempuran Lima Hari di Semarang (15–20 Oktober 1945)
      </Text>
      <Text style={styles.paragraph}>
        Salah satu peristiwa heroik yang terjadi setelah Proklamasi Kemerdekaan.
        Rakyat Semarang bersama pemuda dan tentara Indonesia bertempur melawan
        tentara Jepang yang masih ada di kota. Pertempuran ini dipicu oleh
        penangkapan dan pembunuhan dr. Kariadi serta pengambilalihan senjata di
        berbagai tempat. Pertempuran berlangsung sengit selama lima hari dan
        dikenang sebagai simbol keberanian rakyat Semarang.
      </Text>

      <Text style={styles.heading}>
        2. Pemberontakan PKI 1948 dan Dampaknya di Semarang
      </Text>
      <Text style={styles.paragraph}>
        Meskipun pusat pemberontakan berada di Madiun, dampak dari gerakan ini
        turut terasa di Semarang. Pemerintah memperketat pengawasan terhadap
        kelompok-kelompok politik dan ideologi ekstrem. Semarang menjadi salah
        satu basis penting dalam pengendalian stabilitas politik di Jawa Tengah.
      </Text>

      <Text style={styles.heading}>3. Demonstrasi Mahasiswa 1998</Text>
      <Text style={styles.paragraph}>
        Seperti kota besar lainnya, Semarang turut menjadi lokasi demonstrasi
        mahasiswa menuntut reformasi dan turunnya Presiden Soeharto. Aksi-aksi
        damai dilakukan oleh mahasiswa UNDIP, UNNES, dan kampus-kampus lain,
        yang menyuarakan demokratisasi dan kebebasan berpendapat.
      </Text>

      <Text style={styles.heading}>4. Banjir Rob Tahunan</Text>
      <Text style={styles.paragraph}>
        Banjir rob (air laut pasang) merupakan fenomena tahunan yang cukup
        sering melanda wilayah pesisir Semarang, terutama di kawasan Kaligawe,
        Tanjung Mas, dan Genuk. Pemerintah telah melakukan berbagai upaya
        penanganan seperti pembangunan tanggul laut dan sistem pompa air.
      </Text>

      <Text style={styles.heading}>
        5. Rehabilitasi Kota Lama dan Revitalisasi Warisan Sejarah
      </Text>
      <Text style={styles.paragraph}>
        Dalam beberapa tahun terakhir, pemerintah kota dan pusat melakukan
        proyek besar untuk menghidupkan kembali Kota Lama Semarang. Proyek ini
        mencakup perbaikan bangunan tua, peningkatan fasilitas pariwisata, serta
        penataan kawasan agar menjadi ikon sejarah dan budaya.
      </Text>

      <Text style={styles.heading}>
        6. Peresmian Masjid Agung Jawa Tengah (2006)
      </Text>
      <Text style={styles.paragraph}>
        Masjid ini menjadi landmark religius sekaligus simbol toleransi dan
        kebangkitan spiritual masyarakat Semarang. Masjid dengan arsitektur
        megah ini juga menjadi destinasi wisata religi favorit.
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
