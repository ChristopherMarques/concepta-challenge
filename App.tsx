import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "./src/theme";
import Dropdown from "./src/components/Dropdown/Dropdown";

const App: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState("Select an Option");
  const handleRename = () => {
    setOptionSelected("Option selected is Rename");
  };

  const handleDelete = () => {
    setOptionSelected("Option selected is Delete");
  };

  const handleShare = () => {
    setOptionSelected("Option selected is Share");
  };

  const menuItems = [
    { label: "Rename", onClick: handleRename },
    { label: "Delete", onClick: handleDelete },
    { label: "Share", onClick: handleShare },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concepta Challenge</Text>
      <Text style={styles.text}>{optionSelected}</Text>
      <Dropdown menuItems={menuItems} alignment="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black900,
  },
  text: {
    color: colors.white100,
    fontSize: 20,
    marginBottom: 15,
  },
});

export default App;
