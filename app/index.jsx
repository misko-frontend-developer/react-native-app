import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/logo.jpg";
import { Link } from "expo-router";
import Spacer from "./components/Spacer";
import ThemedView from "./components/ThemedView";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Number 1 </Text>
      <Spacer />
      <Text style={{ fontSize: 14, marginTop: 20 }}> Reading List App</Text>
      <Link style={styles.link} href="/about">
        About Page
      </Link>
      <Link style={styles.link} href="/contact">
        Contact Page
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
    marginVertical: 20,
  },
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
