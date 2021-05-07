import React from "react";
import { Text, Item } from "native-base";
import { StyleSheet } from "react-native";

type ValidationErrorTextProps = {
  errorText: string;
};

const ValidationErrorText = ({
  errorText = "This is Required",
}: ValidationErrorTextProps) => {
  return (
    <Item style={styles.container}>
      <Text style={styles.text}>{errorText}</Text>
    </Item>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flexDirection: "column",
    paddingTop: 5,
    alignItems: "flex-start",
    borderBottomColor: "transparent",
  },
  text: {
    color: "#FF3333",
    fontSize: 12,
  },
});

export default ValidationErrorText;
