import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MoreIcon from "../MoreIcon/MoreIcon";
import colors from "../../theme";

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: 80,
    height: 80,
  },
  icon: {
    width: 50,
    height: 60,
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black500,
    alignItems: "center",
    color: colors.white100,
    borderRadius: 0,
  },
});

interface DropdownButtonProps {
  onPress: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.icon}>
        <MoreIcon />
      </View>
    </TouchableOpacity>
  );
};

export default DropdownButton;
