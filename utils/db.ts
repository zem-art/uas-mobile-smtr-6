import * as SQLite from 'expo-sqlite';

// Debugging untuk memastikan modul terimpor
console.log('SQLite module:', SQLite);

// Buka database secara asinkronus
const dbPromise = SQLite.openDatabaseAsync('user.db');

// Membuat tabel users saat pertama kali
export const initDB = async () => {
  const db = await dbPromise;
  try {
    await db.execAsync(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );`);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// Menyisipkan pengguna baru
export const insertUser = async (email: string, password: string) => {
  const db = await dbPromise;
  try {
    await db.runAsync(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password]
    );
    console.log('User inserted successfully');
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
};

// Mengambil pengguna berdasarkan email
export const getUserByEmail = async (email: string): Promise<{ id: number; email: string; password: string } | null> => {
  const db = await dbPromise;
  try {
    const result = await db.getAllAsync(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return result[0] as { id: number; email: string; password: string } | null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};