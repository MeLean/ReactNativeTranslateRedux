import React, { useEffect } from "react";
import { View, Text, Dimensions, ImageBackground } from "react-native";
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
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
      {curTranslatedTexts.flagIcon}
      <View
        style={{
          width: "100%",
          position: "absolute",
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 50,
            borderColor: "#AAA",
            borderWidth: 1
          }}
        >
          {curTranslatedTexts.langName}
        </Text>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = navData => {
  const title = navData.navigation.getParam("title");

  return {
    headerTitle: title
  };
};

export default HomeScreen;
