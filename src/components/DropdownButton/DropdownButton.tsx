import { Text, TouchableOpacity } from "react-native";
import colors from "../../theme";
import MoreIcon from "../MoreIcon/MoreIcon";
import styles from "./styles";

type DropdownButtonProps = {
  onPress: () => void;
};

const DropdownButton = ({ onPress }: DropdownButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MoreIcon color={colors.white100} size="40" />
    </TouchableOpacity>
  );
};

export default DropdownButton;
