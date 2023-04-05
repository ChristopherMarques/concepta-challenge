import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import colors from "../../theme";

interface DropdownMenuProps {
  isVisible: boolean;
  onClose: () => void;
  items: {
    label: string;
    onPress?: () => void;
    url?: string;
  }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isVisible,
  onClose,
  items,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.menu}>
      {items.map(({ label, onPress, url }, index) => {
        const content = url ? (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => Linking.openURL(url)}
          >
            <Text style={styles.text}>{label}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
          </TouchableOpacity>
        );
        return <React.Fragment key={index}>{content}</React.Fragment>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "relative",
    backgroundColor: colors.black500,
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
  },
  text: {
    color: colors.white100,
    fontSize: 20,
  },
});

export default DropdownMenu;
