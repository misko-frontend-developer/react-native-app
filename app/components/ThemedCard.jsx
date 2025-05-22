import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, ...props }) => {
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

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
