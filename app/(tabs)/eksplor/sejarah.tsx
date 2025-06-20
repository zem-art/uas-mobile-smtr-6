import { ScrollView, StyleSheet, Text } from 'react-native';

export default function SejarahScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sejarah Semarang</Text>
      <Text style={styles.content}>
        Semarang berawal dari pelabuhan kecil di pantai utara Jawa dan berkembang menjadi kota besar sejak masa kolonial Belanda. Banyak bangunan tua bergaya Eropa masih berdiri seperti Lawang Sewu dan Kota Lama.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  content: { fontSize: 16, lineHeight: 24 },
});
