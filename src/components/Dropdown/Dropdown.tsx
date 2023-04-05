import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});

interface DropdownProps {
  items: {
    label: string;
    onPress: () => void;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonPress = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <DropdownButton onPress={handleButtonPress} />
      <DropdownMenu
        isVisible={isVisible}
        onClose={handleMenuClose}
        items={items}
      />
    </View>
  );
};

export default Dropdown;
