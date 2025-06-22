import { Colors } from '@/utils/Colors';
import { IconSymbol } from '@/utils/IconSymbol';
import { getUserByEmail } from '@/utils/db';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const scaleAnimLogin = useRef(new Animated.Value(1)).current;
  const scaleAnimSignup = useRef(new Animated.Value(1)).current;
  const scaleAnimBack = useRef(new Animated.Value(1)).current;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePressIn = (scaleAnim: Animated.Value) => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleAnim: Animated.Value) => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan password wajib diisi');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    setIsLoading(true);
    try {
      const user = await getUserByEmail(email);
      if (user && user.password === password) {
        Alert.alert('Sukses', 'Login berhasil');
        router.replace('/(tabs)');
      } else {
        Alert.alert('Error', 'Email atau password salah');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Terjadi kesalahan saat login. Coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPressIn={() => handlePressIn(scaleAnimBack)}
        onPressOut={() => handlePressOut(scaleAnimBack)}
        onPress={() => router.replace('/(tabs)') }
      >
        <Animated.View style={{ transform: [{ scale: scaleAnimBack }] }}>
          <IconSymbol lib="Feather" name="arrow-left" size={24} color={Colors.background} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={styles.title}>Masuk Akun</Text>
      <View style={styles.inputContainer}>
        <IconSymbol lib="Feather" name="mail" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <IconSymbol lib="Feather" name="lock" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.buttonGroup}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.blue} />
        ) : (
          <>
            <Animated.View style={{ transform: [{ scale: scaleAnimLogin }] }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonShadow]}
                onPressIn={() => handlePressIn(scaleAnimLogin)}
                onPressOut={() => handlePressOut(scaleAnimLogin)}
                onPress={handleLogin}
              >
                <IconSymbol lib="Feather" name="log-in" size={20} color={Colors.background} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Masuk</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ scale: scaleAnimSignup }] }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonShadow, { backgroundColor: Colors.blue }]}
                onPressIn={() => handlePressIn(scaleAnimSignup)}
                onPressOut={() => handlePressOut(scaleAnimSignup)}
                onPress={() => router.push('/(auth)/signup')}
              >
                <IconSymbol lib="Feather" name="user-plus" size={20} color={Colors.background} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Daftar</Text>
              </TouchableOpacity>
            </Animated.View>
          </>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: Colors.background,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  buttonGroup: {
    flexDirection: 'row',
    // gap: 16,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width : "85%",
    height : "25%"
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: Colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
});