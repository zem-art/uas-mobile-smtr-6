import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const infrastrukturSemarang = [
  {
    name: "Jalan Tol Trans Jawa (Gerbang Tol Kalikangkung)",
    description: "Semarang merupakan titik penting dalam jaringan Tol Trans Jawa. Gerbang Tol Kalikangkung menjadi akses utama dari arah barat dan timur Pulau Jawa. Hal ini mempercepat distribusi logistik dan memudahkan mobilitas warga."
  },
  {
    name: "Pelabuhan Tanjung Emas",
    description: "Pelabuhan ini terus diperluas dan ditingkatkan fasilitasnya, termasuk terminal peti kemas, terminal penumpang, dan zona logistik. Perannya vital dalam ekspor-impor barang dari Jawa Tengah ke mancanegara."
  },
  {
    name: "Bandara Internasional Ahmad Yani",
    description: "Bandara ini telah direnovasi dengan konsep eco-airport. Terminal barunya memiliki desain modern dan ramah lingkungan, mendukung konektivitas udara dari dan ke Semarang."
  },
  {
    name: "Sistem Drainase dan Penanggulangan Banjir Rob",
    description: "Pemerintah mengembangkan sistem drainase terpadu serta tanggul laut dan pompa air untuk mengatasi banjir rob yang rutin terjadi di pesisir utara Semarang. Proyek-proyek ini melibatkan kerja sama dengan pemerintah pusat dan lembaga internasional."
  },
  {
    name: "Pembangunan Kawasan Kota Lama dan Simpang Lima",
    description: "Kota Lama Semarang direvitalisasi menjadi kawasan heritage modern dengan penataan pedestrian, lampu klasik, dan fasilitas publik. Sementara itu, Simpang Lima terus dipercantik sebagai ruang publik dengan taman, jalur sepeda, dan zona bebas kendaraan."
  },
  {
    name: "Transportasi Umum dan BRT Trans Semarang",
    description: "Peningkatan layanan BRT Trans Semarang dan integrasi dengan angkutan umum lain memperbaiki sistem transportasi publik. Hal ini mendukung mobilitas masyarakat dengan lebih efisien dan ramah lingkungan."
  }
];

export default function InfrastrukturScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perkembangan Infrastruktur di Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang sebagai ibu kota Provinsi Jawa Tengah mengalami perkembangan pesat dalam sektor infrastruktur. Pemerintah kota dan pusat terus mendorong pembangunan untuk meningkatkan konektivitas, kenyamanan, dan daya saing kota ini sebagai pusat ekonomi, pendidikan, dan pariwisata.
      </Text>

      {infrastrukturSemarang.map((item, index) => (
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