import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import LanguagePicker from "../components/LanguagePicker";
import { Languages } from "../Languages";

const StartScreen = props => {
  let curTranslatedTexts = useSelector(state => state.languages.currentSet);

  if (!curTranslatedTexts) {
    curTranslatedTexts = Languages[Object.keys(Languages)[0]];
  }

  useEffect(() => {
    props.navigation.setParams({
      langName: curTranslatedTexts.langName,
      title: curTranslatedTexts.startScreen
    });
  }, [curTranslatedTexts]);

  return (
    <View style={{ flex: 1 }}>
      <Text>{curTranslatedTexts.hello}</Text>

      <LanguagePicker />

      <Button
        title={curTranslatedTexts.goHome || "home"}
        onPress={() => {
          props.navigation.navigate("home");
        }}
      />
    </View>
  );
};

StartScreen.navigationOptions = navData => {
  const title = navData.navigation.getParam("title");

  return {
    headerTitle: title
  };
};

export default StartScreen;
