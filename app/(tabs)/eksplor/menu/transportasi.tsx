import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const transportasiSemarang = [
  {
    name: "Bandara Internasional Jenderal Ahmad Yani",
    description: "Bandara utama yang melayani penerbangan domestik dan internasional, dengan fasilitas modern dan akses mudah dari pusat kota."
  },
  {
    name: "Stasiun Tawang",
    description: "Stasiun kereta api ikonik yang juga menjadi cagar budaya. Melayani rute ke berbagai kota besar di Pulau Jawa."
  },
  {
    name: "Trans Semarang",
    description: "Bus Rapid Transit (BRT) yang menjadi andalan warga untuk transportasi dalam kota. Rute-rute tersebar di seluruh penjuru kota."
  },
  {
    name: "Pelabuhan Tanjung Emas",
    description: "Pelabuhan utama di Semarang yang melayani kapal penumpang dan kargo. Memiliki peran penting dalam perdagangan dan logistik regional."
  },
  {
    name: "Angkutan Umum Tradisional",
    description: "Beragam angkutan umum seperti angkot, becak, dan ojek online yang memudahkan akses ke berbagai lokasi di kota. Becak wisata juga tersedia untuk tur keliling kota."
  }
];

export default function TransportasiScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Transportasi di Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang memiliki berbagai sarana transportasi yang mendukung
        mobilitas warganya maupun wisatawan, baik melalui darat, laut, maupun
        udara:
      </Text>

      {transportasiSemarang.map((item, index) => (
        <View key={index}>
          <Text style={styles.heading}>{`${index + 1}. ${item.name}`}</Text>
          <Text style={styles.paragraph}>{item.description}</Text>
        </View>
      ))}

      <Pressable onPress={() => router.replace("/eksplor")} style={styles.buttonBack}>
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