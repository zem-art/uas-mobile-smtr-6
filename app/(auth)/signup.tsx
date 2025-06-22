import { Colors } from '@/utils/Colors';
import { IconSymbol } from '@/utils/IconSymbol';
import { initDB, insertUser } from '@/utils/db';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const scaleAnimSignup = useRef(new Animated.Value(1)).current;
  const scaleAnimSignin = useRef(new Animated.Value(1)).current;
  const scaleAnimBack = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const initialize = async () => {
      try {
        await initDB();
        console.log('Database initialized in SignUp');
      } catch (error) {
        console.error('Error initializing DB:', error);
        Alert.alert('Error', 'Gagal menginisialisasi database. Coba lagi nanti.');
      }
    };
    initialize();
  }, []);

  const validateUsername = (username: string) => {
    // Minimal 3 karakter, hanya huruf, angka, dan underscore
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
  };

  const handleSignUp = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Harap isi semua kolom');
      return;
    }

    if (!validateUsername(username)) {
      Alert.alert('Error', 'Username tidak valid (minimal 3 karakter, hanya huruf, angka, atau underscore)');
      return;
    }

    setIsLoading(true);
    try {
      await insertUser(username, password); // Ganti dengan username di db
      Alert.alert('Sukses', 'Registrasi berhasil');
      router.replace('/(auth)/signin');
    } catch (error) {
      console.error('SignUp error:', error);
      Alert.alert('Error', 'Gagal mendaftar. Username mungkin sudah digunakan atau terjadi kesalahan lain.');
    } finally {
      setIsLoading(false);
    }
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

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPressIn={() => handlePressIn(scaleAnimBack)}
        onPressOut={() => handlePressOut(scaleAnimBack)}
        onPress={() => router.back()}
      >
        <Animated.View style={{ transform: [{ scale: scaleAnimBack }] }}>
          <IconSymbol lib="Feather" name="arrow-left" size={24} color={Colors.background} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={styles.title}>Daftar Akun</Text>
      <View style={styles.inputContainer}>
        <IconSymbol lib="Feather" name="user" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          placeholderTextColor="#999"
        />
      </View>
      <View style={styles.inputContainer}>
        <IconSymbol lib="Feather" name="lock" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
          <IconSymbol
            lib="Feather"
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonGroup}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.blue} />
        ) : (
          <>
            <Animated.View style={{ transform: [{ scale: scaleAnimSignup }] }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonShadow]}
                onPressIn={() => handlePressIn(scaleAnimSignup)}
                onPressOut={() => handlePressOut(scaleAnimSignup)}
                onPress={handleSignUp}
              >
                <IconSymbol lib="Feather" name="user-plus" size={20} color={Colors.background} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Daftar</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ scale: scaleAnimSignin }] }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonShadow, { backgroundColor: Colors.blue }]}
                onPressIn={() => handlePressIn(scaleAnimSignin)}
                onPressOut={() => handlePressOut(scaleAnimSignin)}
                onPress={() => router.push('/(auth)/signin')}
              >
                <IconSymbol lib="Feather" name="log-in" size={20} color={Colors.background} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Masuk</Text>
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
    width: '100%',
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
  eyeButton: {
    padding: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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