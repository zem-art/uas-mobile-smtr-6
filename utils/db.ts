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
      username TEXT NOT NULL,
      password TEXT NOT NULL
    );`);
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// Menyisipkan pengguna baru
export const insertUser = async (username: string, password: string) => {
  const db = await dbPromise;
  try {
    await db.runAsync(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    console.log('User inserted successfully');
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
};

// Mengambil pengguna berdasarkan username
export const getUserByEmail = async (username: string): Promise<{ id: number; username: string; password: string } | null> => {
  const db = await dbPromise;
  try {
    const result = await db.getAllAsync(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return result[0] as { id: number; username: string; password: string } | null;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};