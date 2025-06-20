import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text } from 'react-native';

export default function ProfilPage() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('@/assets/images/lambang_Kota_Semarang.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Profil Kota Semarang</Text>

      <Text style={styles.subText}>Wali Kota: Hevearita Gunaryanti Rahayu</Text>
      <Text style={styles.subText}>Wakil Wali Kota: Kosong (per Juni 2025)</Text>
      <Text style={styles.subText}>Populasi: ±1.6 juta jiwa</Text>
      <Text style={styles.subText}>Luas Wilayah: ±373.78 km²</Text>
      <Text style={styles.subText}>Kode Telepon: (024)</Text>

      <Text style={styles.sectionTitle}>Tentang Kota Semarang</Text>
      <Text style={styles.paragraph}>
        Semarang adalah ibu kota dari Provinsi Jawa Tengah, Indonesia. Terletak di pesisir utara Pulau Jawa, kota ini memiliki peran strategis sebagai pusat pemerintahan, ekonomi, dan pendidikan. Sebagai kota metropolitan, Semarang berkembang pesat dengan kombinasi antara kawasan modern dan kawasan bersejarah.
      </Text>

      <Text style={styles.sectionTitle}>Sejarah Singkat</Text>
      <Text style={styles.paragraph}>
        Nama "Semarang" berasal dari kata "asem" dan "arang" yang berarti pohon asam yang tumbuh jarang-jarang. Kota ini mulai berkembang sejak masa kolonial Belanda, dan menjadi pelabuhan penting dalam perdagangan rempah-rempah. Kota Lama Semarang menyimpan banyak bangunan bergaya arsitektur Eropa yang masih berdiri hingga sekarang.
      </Text>

      <Text style={styles.sectionTitle}>Destinasi Populer</Text>
      <Text style={styles.paragraph}>
        - **Lawang Sewu**: Bangunan bersejarah peninggalan Belanda yang terkenal dengan arsitekturnya dan kisah mistisnya.{"\n"}
        - **Kota Lama**: Kawasan bersejarah yang dikenal sebagai "Little Netherland" di Indonesia.{"\n"}
        - **Simpang Lima**: Pusat kota yang ramai, terkenal sebagai tempat nongkrong dan kuliner malam.{"\n"}
        - **Klenteng Sam Poo Kong**: Tempat ibadah sekaligus wisata sejarah peninggalan Laksamana Cheng Ho.{"\n"}
        - **Pantai Marina dan Brown Canyon**: Spot wisata alam dan fotografi yang unik.
      </Text>

      <Text style={styles.sectionTitle}>Kuliner Khas</Text>
      <Text style={styles.paragraph}>
        Semarang memiliki beragam kuliner khas seperti Lumpia Semarang, Tahu Gimbal, Wingko Babat, Bandeng Presto, dan nasi Ayam Semarang. Kuliner-kuliner ini bisa ditemukan di pusat oleh-oleh dan pasar tradisional.
      </Text>

      <Text style={styles.sectionTitle}>Transportasi</Text>
      <Text style={styles.paragraph}>
        Kota ini memiliki berbagai moda transportasi umum seperti Trans Semarang, angkot, taksi online, dan bandara internasional Ahmad Yani. Infrastruktur transportasi terus dikembangkan untuk mendukung konektivitas kota.
      </Text>

      <Text style={styles.sectionTitle}>Pendidikan & Ekonomi</Text>
      <Text style={styles.paragraph}>
        Semarang juga merupakan pusat pendidikan dengan adanya kampus ternama seperti Universitas Diponegoro (UNDIP), Universitas Negeri Semarang (UNNES), dan Politeknik Negeri Semarang (Polines). Dalam bidang ekonomi, Semarang dikenal sebagai kota pelabuhan dan industri yang terus tumbuh.
      </Text>

      <Pressable onPress={() => router.back()} style={styles.buttonBack}>
        <Text style={styles.buttonText}>← Kembali</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 8,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 2,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#1E3A8A',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 22,
  },
  buttonBack: {
    marginTop: 32,
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
