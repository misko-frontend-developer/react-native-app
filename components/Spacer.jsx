import { View } from "react-native";

const Spacer = ({ width = "100%", height = 40, props }) => {
  return <View {...props} style={{ width, height }} />;
};

export default Spacer;
