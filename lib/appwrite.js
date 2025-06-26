import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6856b94100276dcf1459")
  .setPlatform("test.mycompany.com");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
