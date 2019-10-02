import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const HomeScreen = props => {
  //console.log("Home Screen props: " + JSON.stringify(props));
  let curTranslatedTexts = useSelector(state => state.languages.currentSet);

  // useEffect(() => {
  //   props.navigation.setParams({
  //     title: curTranslatedTexts.homeScreen
  //   });
  // }, [curTranslatedTexts]);

  return (
    <View>
      <Text>{curTranslatedTexts.langName}</Text>
    </View>
  );
};

HomeScreen.navigationOptions = navData => {
  // console.log("Home Screen navData " + navData.navigation.curTransl);
  const title = navData.navigation.getParam("title");

  return {
    headerTitle: title
  };
};

export default HomeScreen;
