import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Alert } from "react-native";
import CustomHeaderButton from "./CustomHeaderButton";

const CustomHeaderButtons = props => {
  return (
    <HeaderButtons {...props} HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="English"
        onPress={() => {
          Alert.alert("HI", "EN is pressed", [{ text: "ok" }], {
            cancelable: false
          });
        }}
      />
      <Item
        title="Български"
        onPress={() => {
          Alert.alert("HI", "BG is pressed", [{ text: "ok" }], {
            cancelable: false
          });
        }}
      />
    </HeaderButtons>
  );
};

export default CustomHeaderButtons;
