import { ScrollView, StyleSheet, Text } from 'react-native';

export default function PariwisataScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pariwisata Semarang</Text>
      <Text style={styles.content}>
        Semarang memiliki banyak destinasi wisata seperti Lawang Sewu, Sam Poo Kong, Kota Lama, Kampung Pelangi, dan Pantai Marina. Tak lupa wisata kuliner seperti Lumpia dan Tahu Gimbal.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  content: { fontSize: 16, lineHeight: 24 },
});
