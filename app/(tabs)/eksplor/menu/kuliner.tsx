import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const kulinerSemarang = [
  {
    name: "Lumpia Semarang",
    description: "Lumpia berisi rebung, ayam, dan telur, biasanya disajikan dengan saus kental manis."
  },
  {
    name: "Tahu Gimbal",
    description: "Tahu goreng, lontong, tauge, dan udang goreng, disiram bumbu kacang khas."
  },
  {
    name: "Wingko Babat",
    description: "Kue berbahan kelapa dan ketan, legit dan gurih. Oleh-oleh wajib dari Semarang."
  },
  {
    name: "Bandeng Presto",
    description: "Bandeng duri lunak yang dimasak dengan teknik presto. Cocok disantap dengan sambal."
  },
  {
    name: "Nasi Ayam Semarang",
    description: "Soto ayam khas Semarang dengan kuah bening yang gurih, berisi suwiran ayam kampung, bihun, tomat, dan bawang goreng. Nama 'Bangkong' berasal dari lokasi awal jualannya di Jl. Bangkong (sekarang Jl. Brigjen Katamso)."
  },
  {
    name: "Tahu Pong",
    description: "Tahu goreng yang kopong di bagian dalam, disajikan dengan sambal petis, gimbal udang, dan kadang telur rebus. Rasanya gurih, asin, dan sedikit manis-pedas dari petis."
  },
  {
    name: "Babat Gongso",
    description: "Masakan jeroan sapi (babat, iso, limpa) yang ditumis dengan bumbu kecap, bawang, cabai, dan rempah. Cita rasanya manis, gurih, dan pedas. Cocok dimakan dengan nasi putih hangat."
  },
  {
    name: "Nasi Goreng Babat",
    description: "Nasi goreng dengan potongan babat yang telah direbus dan digoreng, biasanya diberi kecap manis dan bawang merah goreng. Tekstur babatnya kenyal, berpadu dengan rasa gurih manis khas Semarang."
  },
  {
    name: "Mie Kopyok",
    description: "Mie rebus yang disajikan dengan kuah ringan berbumbu bawang putih, ditambah tahu pong, tauge, lontong, dan kerupuk gendar (kerupuk nasi). Rasanya ringan, cocok untuk sarapan."
  }
];

export default function KulinerScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kuliner Khas Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang terkenal dengan ragam kuliner khas yang menggoda. Berikut
        beberapa makanan legendaris dari kota ini:
      </Text>

      {kulinerSemarang.map((item, index) => (
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