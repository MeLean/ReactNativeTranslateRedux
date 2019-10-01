import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Button } from "react-native";
import { changeLanguage } from "../store/actions/languageAction";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/custom_header_components/CustomHeaderButton";

const StartScreen = props => {
  const translatedTexts = useSelector(state => state.languages.current);

  const dispatch = useDispatch();
  const languageChangeHandler = useCallback(
    selectedLang => {
      dispatch(changeLanguage(selectedLang));
    },
    [dispatch, translatedTexts]
  );

  useEffect(() => {
    props.navigation.setParams({
      langName: translatedTexts.langName,
      title: translatedTexts.startScreen
    });
  }, [translatedTexts]);

  useEffect(() => {
    props.navigation.setParams({
      languageChangeHandler: languageChangeHandler
    });
  }, [languageChangeHandler]);

  return (
    <View>
      <Text>{translatedTexts.hello}</Text>
      <Button
        title={translatedTexts.goHome}
        onPress={() => {
          props.navigation.navigate("home");
        }}
      />
    </View>
  );
};

StartScreen.navigationOptions = navData => {
  const selectedLangName = navData.navigation.getParam("langName");
  const title = navData.navigation.getParam("title");
  const languageChangeHandler = navData.navigation.getParam(
    "languageChangeHandler"
  );
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="English"
          onPress={() => {
            languageChangeHandler("English");
          }}
        />
        <Item
          title="Български"
          onPress={() => {
            languageChangeHandler("Български");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default StartScreen;
