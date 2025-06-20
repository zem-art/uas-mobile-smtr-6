import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function EksplorPage() {
  const router = useRouter();
  const navTo = (path: string) => () => router.push(`/eksplor/${path}`);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eksplor Kota Semarang</Text>
      {['sejarah', 'pariwisata', 'infrastruktur', 'budaya'].map((key) => (
        <Pressable key={key} style={styles.button} onPress={navTo(key)}>
          <Text style={styles.text}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  button: {
    backgroundColor: '#d32f2f',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
