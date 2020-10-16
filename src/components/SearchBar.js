import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../utils/basics";
import { FontAwesome5 } from "@expo/vector-icons";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name="search-location"
          size={20}
          color={PRIMARY_COLOR}
          style={styles.icon}
        />
      </View>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter the location"
        style={styles.text}
        onChangeText={(city) => changeHandler(city)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    width: 250,
    height: 55,
    padding: 15,
    borderColor: BORDER_COLOR,
    left: 80,
    bottom: 50,
    //justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: SECONDARY_COLOR,

    paddingLeft: 18,
  },
  iconContainer: {
    //padding: 3,
    justifyContent: "flex-start",
  },
});
