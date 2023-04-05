import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Dropdown from "./src/components/Dropdown";
import colors from "./src/theme";

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
    { label: "Rename", onPress: handleRename },
    { label: "Delete", onPress: handleDelete },
    { label: "Share", onPress: handleShare },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Concepta Challenge</Text>
      <Text style={styles.text}>{optionSelected}</Text>
      <Dropdown items={menuItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black900,
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    marginBottom: 15,
  },
});

export default App;
