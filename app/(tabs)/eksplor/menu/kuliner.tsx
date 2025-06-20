// contoh: app/eksplor/kuliner.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function KulinerScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kuliner Khas Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang terkenal dengan ragam kuliner khas yang menggoda. Berikut
        beberapa makanan legendaris dari kota ini:
      </Text>

      <Text style={styles.heading}>1. Lumpia Semarang</Text>
      <Text style={styles.paragraph}>
        Lumpia berisi rebung, ayam, dan telur, biasanya disajikan dengan saus
        kental manis.
      </Text>

      <Text style={styles.heading}>2. Tahu Gimbal</Text>
      <Text style={styles.paragraph}>
        Tahu goreng, lontong, tauge, dan udang goreng, disiram bumbu kacang
        khas.
      </Text>

      <Text style={styles.heading}>3. Wingko Babat</Text>
      <Text style={styles.paragraph}>
        Kue berbahan kelapa dan ketan, legit dan gurih. Oleh-oleh wajib dari
        Semarang.
      </Text>

      <Text style={styles.heading}>4. Bandeng Presto</Text>
      <Text style={styles.paragraph}>
        Bandeng duri lunak yang dimasak dengan teknik presto. Cocok disantap
        dengan sambal.
      </Text>

      <Text style={styles.heading}>5. Nasi Ayam Semarang</Text>
      <Text style={styles.paragraph}>
        Soto ayam khas Semarang dengan kuah bening yang gurih, berisi suwiran ayam kampung, bihun, tomat, dan bawang goreng. Nama "Bangkong" berasal dari lokasi awal jualannya di Jl. Bangkong (sekarang Jl. Brigjen Katamso).
      </Text>

      <Text style={styles.heading}>6. Tahu Pong</Text>
      <Text style={styles.paragraph}>
        Tahu goreng yang kopong di bagian dalam, disajikan dengan sambal petis, gimbal udang, dan kadang telur rebus. Rasanya gurih, asin, dan sedikit manis-pedas dari petis.
      </Text>

      <Text style={styles.heading}>7. Babat Gongso</Text>
      <Text style={styles.paragraph}>
        Masakan jeroan sapi (babat, iso, limpa) yang ditumis dengan bumbu kecap, bawang, cabai, dan rempah. Cita rasanya manis, gurih, dan pedas. Cocok dimakan dengan nasi putih hangat.
      </Text>

      <Text style={styles.heading}>8. Nasi Goreng Babat</Text>
      <Text style={styles.paragraph}>
        Nasi goreng dengan potongan babat yang telah direbus dan digoreng, biasanya diberi kecap manis dan bawang merah goreng. Tekstur babatnya kenyal, berpadu dengan rasa gurih manis khas Semarang.
      </Text>

      <Text style={styles.heading}>9. Mie Kopyok</Text>
      <Text style={styles.paragraph}>
        Mie rebus yang disajikan dengan kuah ringan berbumbu bawang putih, ditambah tahu pong, tauge, lontong, dan kerupuk gendar (kerupuk nasi). Rasanya ringan, cocok untuk sarapan.
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
