import { Languages } from "../../Languages.js";
import { CHANGE_LANGUAGE } from "../actions/languageAction.js";

let currentLang = Languages.en;
const initialState = { current: currentLang };

const languageReducer = (state = initialState, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    switch (action.lang) {
      case Languages.en.langName:
        currentLang = Languages.en;
        break;
      case Languages.bg.langName:
        currentLang = Languages.bg;
        break;

      default:
        console.log("No language found for action.lang: " + action.lang);
        return state;
    }

    return { ...state, current: currentLang };
  }

  return state;
};

export default languageReducer;
