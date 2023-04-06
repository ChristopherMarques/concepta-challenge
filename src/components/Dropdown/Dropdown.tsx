import React, { useState } from "react";
import { View } from "react-native";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import styles from "./styles";

type DropdownProps = {
  menuItems: { label: string; onClick: () => void }[];
  alignment?: "left" | "right";
  renderItem?: (item: {
    label: string;
    onClick: () => void;
  }) => React.ReactNode;
};

const Dropdown = ({
  menuItems,
  alignment = "left",
  renderItem,
}: DropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <View style={styles.container}>
      <DropdownButton onPress={toggleVisibility} />
      <DropdownMenu
        isVisible={isVisible}
        alignment={alignment}
        menuItems={menuItems}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dropdown;
