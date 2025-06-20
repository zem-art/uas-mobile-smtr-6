import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Lambang_Kota_Semarang.png',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Profil Kota Semarang</Text>
      <Text style={styles.description}>
        Semarang adalah ibu kota Provinsi Jawa Tengah. Kota ini dikenal dengan Kota Lama, Lawang Sewu, dan kuliner lumpia.
      </Text>
      <View style={styles.buttonGroup}>
        <Pressable style={styles.buttonBlue} onPress={() => router.push('/eksplor/infrastruktur')}>
          <Text style={styles.buttonText}>Lihat Detail</Text>
        </Pressable>
        <Pressable style={styles.buttonGreen} onPress={() => router.push('/eksplor/budaya')}>
          <Text style={styles.buttonText}>Eksplor Destinasi</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  buttonBlue: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonGreen: {
    backgroundColor: '#22C55E',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
