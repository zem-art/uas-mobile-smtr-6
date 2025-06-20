// app/eksplor/budaya.tsx
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function BudayaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kebudayaan Kota Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang merupakan kota multikultural yang kaya akan warisan budaya.
        Pengaruh budaya Jawa, Tionghoa, Arab, dan Belanda berpadu membentuk
        identitas unik yang tercermin dalam seni, arsitektur, bahasa, dan
        tradisi masyarakatnya.
      </Text>

      <Text style={styles.heading}>1. Wayang Kulit dan Kesenian Jawa</Text>
      <Text style={styles.paragraph}>
        Wayang kulit merupakan kesenian tradisional yang masih hidup di tengah
        masyarakat Semarang, terutama di daerah pinggiran kota dan pesantren.
        Selain itu, seni karawitan, gamelan, dan tari-tarian klasik Jawa sering
        dipentaskan dalam berbagai acara adat dan budaya.
      </Text>

      <Text style={styles.heading}>2. Festival Dugderan dan Warak Ngendog</Text>
      <Text style={styles.paragraph}>
        Festival Dugderan adalah tradisi khas Semarang yang diselenggarakan
        menjelang Ramadan. Maskot utamanya, Warak Ngendog, merupakan makhluk
        mitologi hasil akulturasi budaya Jawa, Arab, dan Tionghoa. Festival ini
        mencerminkan semangat toleransi dan keberagaman.
      </Text>

      <Text style={styles.heading}>3. Seni Arsitektur Kota Lama</Text>
      <Text style={styles.paragraph}>
        Kawasan Kota Lama menjadi cerminan perpaduan budaya kolonial Belanda
        dengan budaya lokal. Bangunan-bangunan tua seperti Gereja Blenduk,
        Spiegel Bar, dan Gedung Marba menjadi ikon kota dan pusat kegiatan seni
        dan budaya masa kini.
      </Text>

      <Text style={styles.heading}>4. Kuliner Tradisional</Text>
      <Text style={styles.paragraph}>
        Budaya kuliner Semarang sangat beragam. Lumpia Semarang, bandeng presto,
        tahu gimbal, dan wingko babat adalah beberapa contoh warisan budaya yang
        tak hanya menggugah selera tapi juga memiliki nilai historis.
      </Text>

      <Text style={styles.heading}>5. Bahasa dan Dialek</Text>
      <Text style={styles.paragraph}>
        Masyarakat Semarang umumnya menggunakan Bahasa Jawa dengan dialek khas
        pesisir yang lebih lugas dan cepat. Hal ini menjadi bagian tak
        terpisahkan dari identitas budaya masyarakat kota ini.
      </Text>

      <Text style={styles.heading}>6. Komunitas Budaya dan Kreatif</Text>
      <Text style={styles.paragraph}>
        Banyak komunitas budaya yang aktif di Semarang, seperti komunitas seni
        rupa, sastra, teater, dan musik. Ruang-ruang kreatif dan event seperti
        pameran seni, pertunjukan jalanan, dan diskusi budaya rutin
        diselenggarakan.
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
