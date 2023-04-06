import { StyleSheet } from "react-native";
import colors from "../../theme";

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 35,
    backgroundColor: colors.black800,
    padding: 10,
    zIndex: 1,
  },
  menuItem: {
    marginVertical: 5,
  },
  text: {
    color: colors.white100,
    fontSize: 20,
  },
});

export default styles;
