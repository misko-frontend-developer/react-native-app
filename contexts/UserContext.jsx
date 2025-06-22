import { createContext, useState } from "react";
import { ID } from "react-native-appwrite";
import { account } from "../lib/appwrite";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState();

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();
      setUser(response);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function logout() {}

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
