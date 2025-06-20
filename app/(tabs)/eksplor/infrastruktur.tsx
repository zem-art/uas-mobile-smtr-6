import { ScrollView, StyleSheet, Text } from 'react-native';

export default function InfrastrukturScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Infrastruktur Kota Semarang</Text>
      <Text style={styles.content}>
        Semarang dilengkapi infrastruktur modern seperti Bandara Internasional Ahmad Yani, Pelabuhan Tanjung Emas, jaringan tol Trans Jawa, BRT, dan revitalisasi drainase untuk mengatasi banjir rob.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  content: { fontSize: 16, lineHeight: 24 },
});
