import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function SejarahScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sejarah Kota Semarang</Text>
      <Text style={styles.paragraph}>
        Kota Semarang memiliki sejarah panjang dan kaya yang dimulai sejak zaman
        kerajaan, kolonial Belanda, hingga masa kemerdekaan dan modernisasi.
        Nama "Semarang" sendiri berasal dari kata "asem" dan "arang" (jarang),
        yang merujuk pada tumbuhan asem yang tumbuh jarang-jarang di wilayah ini
        pada awalnya.
      </Text>

      <Text style={styles.heading}>Masa Kerajaan</Text>
      <Text style={styles.paragraph}>
        Pada abad ke-9 hingga ke-10, wilayah Semarang merupakan bagian dari
        kerajaan-kerajaan Hindu-Buddha di Jawa Tengah seperti Mataram Kuno.
        Wilayah ini berkembang sebagai daerah agraris dan pelabuhan kecil di
        pesisir utara Pulau Jawa.
      </Text>

      <Text style={styles.heading}>Masa Islam dan Sunan Kalijaga</Text>
      <Text style={styles.paragraph}>
        Pada abad ke-15, Semarang mulai berkembang sebagai pusat penyebaran
        agama Islam oleh para Wali Songo, terutama Sunan Kalijaga. Beliau
        diyakini memiliki peran penting dalam menyebarkan Islam di wilayah
        pantai utara Jawa dengan pendekatan budaya dan seni.
      </Text>

      <Text style={styles.heading}>Masa Kolonial Belanda</Text>
      <Text style={styles.paragraph}>
        Pada abad ke-17, Belanda mulai menjadikan Semarang sebagai pusat
        perdagangan dan pemerintahan kolonial. Kota ini berkembang pesat menjadi
        pusat administrasi, perdagangan, dan transportasi. Banyak bangunan
        bergaya Eropa dibangun, yang kini menjadi bagian dari kawasan Kota Lama.
        Pelabuhan Tanjung Emas dan rel kereta api pertama di Indonesia juga
        dibangun di Semarang.
      </Text>

      <Text style={styles.heading}>Masa Perjuangan Kemerdekaan</Text>
      <Text style={styles.paragraph}>
        Semarang memiliki peran penting dalam perjuangan kemerdekaan Indonesia.
        Pertempuran lima hari di Semarang pada Oktober 1945 menjadi simbol
        perlawanan rakyat melawan pasukan Jepang. Peristiwa ini dikenang sebagai
        tonggak patriotisme warga Semarang.
      </Text>

      <Text style={styles.heading}>Era Modern dan Pembangunan</Text>
      <Text style={styles.paragraph}>
        Seiring perkembangan zaman, Semarang tumbuh menjadi kota metropolitan
        yang menjadi pusat pemerintahan Provinsi Jawa Tengah. Dengan pembangunan
        infrastruktur, pariwisata, dan pendidikan, Semarang terus berbenah
        sebagai kota yang modern tanpa melupakan sejarahnya yang agung.
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
