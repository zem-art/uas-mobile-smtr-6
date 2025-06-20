// app/eksplor/tokoh.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function TokohScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tokoh Penting dari Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang memiliki peran penting dalam sejarah bangsa Indonesia, dan
        telah melahirkan atau menjadi tempat berkiprah bagi sejumlah tokoh
        nasional dan budaya:
      </Text>

      <Text style={styles.heading}>1. R.A. Kartini</Text>
      <Text style={styles.paragraph}>
        Meski lahir di Jepara, Kartini pernah belajar di Semarang dan menjadi
        simbol emansipasi perempuan Indonesia melalui pemikirannya yang maju.
      </Text>

      <Text style={styles.heading}>2. Imam Bonjol</Text>
      <Text style={styles.paragraph}>
        Pahlawan nasional yang pernah diasingkan ke Semarang oleh Belanda.
        Namanya diabadikan sebagai nama jalan dan bangunan.
      </Text>

      <Text style={styles.heading}>3. Haji Agus Salim</Text>
      <Text style={styles.paragraph}>
        Diplomat ulung dan tokoh pergerakan yang sempat aktif di wilayah
        Semarang dalam kegiatan jurnalistik dan organisasi Islam modern.
      </Text>

      <Text style={styles.heading}>4. Ki Narto Sabdo</Text>
      <Text style={styles.paragraph}>
        Maestro seni pedalangan dan musik Jawa asal Semarang yang turut
        mempopulerkan wayang golek dan langgam Jawa secara nasional.
      </Text>

      <Text style={styles.heading}>5. Soegijapranata</Text>
      <Text style={styles.paragraph}>
        Uskup pertama Indonesia yang berasal dari Semarang, dikenal sebagai
        tokoh toleransi antarumat beragama dan pejuang kemerdekaan.
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
