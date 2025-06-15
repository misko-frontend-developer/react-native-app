import { View, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: theme.uiBackground,
        },
        styles.card,
        style,
      ]}
    />
  );
};

export default ThemedLogo;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
