import { Languages } from "../../translation_components/Languages.js";
import { CHANGE_LANGUAGE } from "../actions/languageAction.js";
const firstIndex = Object.keys(Languages)[0];

const initialState = {
  currentSet: Languages[firstIndex],
  currentLabel: firstIndex
};

const languageReducer = (state = initialState, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    state.currentSet = Languages[action.lang];
    state.currentLabel = action.lang;
  }

  return state;
};

export default languageReducer;
