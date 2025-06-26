import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setProject("6856b94100276dcf1459")
  .setPlatform("test.mycompany.com");

export const account = new Account(client);
export const avatars = new Avatars(client);
