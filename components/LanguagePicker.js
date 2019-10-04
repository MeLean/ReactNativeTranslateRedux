import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/actions/languageAction";
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import { Languages } from "../Languages";

const LanguagePicker = props => {
  const translatedTexts = useSelector(state => state.languages.currentSet);
  const curLang = useSelector(state => state.languages.currentLabel);
  const dispatch = useDispatch();

  //console.log("props:" + JSON.stringify(props));
  //console.log("curLang " + curLang);

  const languageChangeHandler = useCallback(
    selectedLang => {
      //console.log(" selected " + selectedLang);
      AsyncStorage.setItem("languages", selectedLang)
        .then(() => {
          dispatch(changeLanguage(selectedLang));
        })
        .catch(error => {
          console.log(selectedLang + " is not saved, because: " + error);
        });
    },
    [dispatch, translatedTexts]
  );

  if (!translatedTexts) {
    AsyncStorage.getItem("languages")
      .then(savedLang => {
        if (savedLang) {
          dispatch(changeLanguage(savedLang));
          return;
        }
        throw error("error: There was no saved lang!");
      })
      .catch(error => {
        console.log("default lang is set to default, because " + error);
        languageChangeHandler(Languages[0]);
      });

    return <ActivityIndicator size="small" />;
  }

  // let chosenLangKey;
  // StorageIO.getItem("language")
  //   .then(result => {
  //     if (result) {
  //       chosenLangKey = result;
  //       //console.log("chosenLangKey in result: " + chosenLangKey);
  //       return;
  //     }
  //     console.log("result: " + result);
  //     chosenLangKey = "en";
  //   })
  //   .catch((chosenLangKey = "en"));

  // //console.log("chosenLangKey " + chosenLangKey);

  // const translatedTexts = Languages[chosenLangKey];
  // //console.log("curTranslatedTexts: " + JSON.stringify(curTranslatedTexts));
  // const [curLang, setCurLang] = useState(chosenLangKey);
  // const [curTranslatedTexts, setCurTranslatedTexts] = useState(translatedTexts);

  // const onLanguagePressHandler = lang => {
  //   //console.log("clicked: " + lang + " curLang: " + curLang);
  //   if (curLang === lang) {
  //     return;
  //   }

  //   StorageIO.setItem("language", lang)
  //     .then(() => {
  //       setCurTranslatedTexts(Languages[lang]);
  //       setCurLang(lang);
  //       props.changeParentState(lang);
  //     })
  //     .catch(error => {
  //       console.log(lang + " not saved!" + " " + error);
  //     });
  // };

  const languageIndicatorBuilder = lang => {
    return (
      <View style={{ flexWrap: "wrap", alignContent: "center" }}>
        <Text
          style={{
            color:
              lang === curLang
                ? props.activeTextColor || "#FF0000"
                : props.passiveTextColor || "#bebebe",
            fontWeight: lang === curLang ? "bold" : "normal",
            textAlign: "center"
          }}
        >
          {lang.toUpperCase()}
        </Text>
        {
          /* {iconLanguageBuilder(lang)} */
          <View width={props.iconsSize} height={props.iconsSize}>
            {Languages[lang].flagIcon}
          </View>
        }
      </View>
    );
  };

  const iconLanguageBuilder = long => {
    switch (long) {
      case "en":
        return <En width={props.iconsSize} height={props.iconsSize} />;
      case "bg":
        return <Bg width={props.iconsSize} height={props.iconsSize} />;
      case "de":
        return <De width={props.iconsSize} height={props.iconsSize} />;
      case "arab":
        return <Arab width={props.iconsSize} height={props.iconsSize} />;

      default:
        return null;
    }
  };

  return (
    <View style={{ ...props.styles, ...styles.container }}>
      <Text>{translatedTexts.langName}</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal={props.horizontal || true}
      >
        {Object.keys(Languages).map(lang => {
          return (
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => languageChangeHandler(lang)}
              key={lang}
            >
              {props.languageIndicatorBuilder || languageIndicatorBuilder(lang)}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", height: 96, margin: 5 },
  scrollView: { margin: 5 },
  textContainer: {
    textAlign: "center",
    fontSize: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center"
  }
});

export default LanguagePicker;
