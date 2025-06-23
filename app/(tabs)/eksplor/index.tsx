import { Colors } from '@/utils/Colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const topics = [
  { key: 'sejarah', title: 'Sejarah', image: require('@/assets/images/eksplor/sejarah.jpg') },
  { key: 'peristiwa', title: 'Peristiwa', image: require('@/assets/images/eksplor/peristiwata.jpeg') },
  { key: 'infrastruktur', title: 'Infrastruktur', image: require('@/assets/images/eksplor/infrastruktur.jpg') },
  { key: 'budaya', title: 'Budaya', image: require('@/assets/images/eksplor/budaya.webp') },
  { key: 'kuliner', title: 'Kuliner Khas', image: require('@/assets/images/eksplor/kuliner.jpeg') },
  { key: 'religi', title: 'Wisata Religi', image: require('@/assets/images/eksplor/wisata-religi.webp') },
  { key: 'alam', title: 'Wisata Alam', image: require('@/assets/images/eksplor/wisata-alam.webp') },
  { key: 'belanja', title: 'Pusat Belanja', image: require('@/assets/images/eksplor/pusat-belanja.jpeg') },
  { key: 'event', title: 'Festival & Acara', image: require('@/assets/images/eksplor/festifal.jpg') },
  { key: 'pendidikan', title: 'Pendidikan', image: require('@/assets/images/eksplor/pendidikan.jpg') },
  { key: 'transportasi', title: 'Transportasi', image: require('@/assets/images/eksplor/transportasi.jpg') },
  { key: 'tokoh', title: 'Tokoh Penting', image: require('@/assets/images/eksplor/tokoh.jpeg') },
];

export default function EksplorPage() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filteredTopics = topics.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const navTo = (path: string) => () => router.replace(`/eksplor/menu/${path}`);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Eksplor Kota Semarang</Text>

        <TextInput
          placeholder="Cari topik seperti: budaya, wisata..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          placeholderTextColor="#999"
        />

        <View style={styles.grid}>
          {filteredTopics.map(({ key, title, image }) => (
            <Pressable key={key} onPress={navTo(key)} style={styles.cardWrapper}>
              <ImageBackground
                source={image}
                style={styles.card}
                imageStyle={styles.image}
              >
                <View style={styles.overlay}>
                  <Text style={styles.cardText}>{title}</Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))}

          {filteredTopics.length === 0 && (
            <Text style={styles.notFound}>Topik tidak ditemukan.</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: Colors.primary,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 25,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.drakGray,
    elevation: 4,
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notFound: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
