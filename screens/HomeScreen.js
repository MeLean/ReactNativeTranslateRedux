import React from "react";
import { View, Text } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "HomeScreen "
};

export default HomeScreen;
