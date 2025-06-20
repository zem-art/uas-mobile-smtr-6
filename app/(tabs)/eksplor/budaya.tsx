import { ScrollView, StyleSheet, Text } from 'react-native';

export default function BiografiScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biografi Kota Semarang</Text>
      <Text style={styles.content}>
        Semarang adalah ibu kota Provinsi Jawa Tengah, Indonesia. Terletak di pesisir utara Pulau Jawa, Semarang merupakan kota metropolitan terbesar kelima di Indonesia. Kota ini kaya akan sejarah, budaya, dan perkembangan infrastruktur modern.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  content: { fontSize: 16, lineHeight: 24 },
});
