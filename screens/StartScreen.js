import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";
import LanguagePicker from "../translation_components/LanguagePicker";
import { Languages } from "../translation_components/Languages";

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

      <LanguagePicker iconsSize={40} />

      <Button
        title={curTranslatedTexts.goHome}
        onPress={() => {
          props.navigation.navigate({
            routeName: "home",
            params: {
              title: curTranslatedTexts.homeScreen
            }
          });
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
