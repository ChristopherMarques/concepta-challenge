import { Text, View } from "react-native";
import styles from "./styles";

type DropdownMenuProps = {
  isVisible: boolean;
  alignment: "left" | "right";
  menuItems: { label: string; onClick: () => void }[];
  renderItem?: (item: {
    label: string;
    onClick: () => void;
  }) => React.ReactNode;
};

const DropdownMenu = ({
  isVisible,
  alignment,
  menuItems,
  renderItem = (item) => (
    <Text onPress={item.onClick} style={styles.text}>
      {item.label}
    </Text>
  ),
}: DropdownMenuProps) => {
  if (!isVisible) return null;
  return (
    <View style={[styles.menu, { [alignment]: 0 }]}>
      {menuItems.map((item) => (
        <View key={item.label} style={styles.menuItem}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  );
};
export default DropdownMenu;
