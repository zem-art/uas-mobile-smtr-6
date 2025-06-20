import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Jelajah Semarang</Text>
      <Text style={styles.content}>
        Temukan informasi seputar kota Semarang: sejarah, budaya, infrastruktur, dan tempat wisata menarik!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  content: { fontSize: 16, textAlign: 'center' },
});
