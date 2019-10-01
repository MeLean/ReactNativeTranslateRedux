export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const changeLanguage = selectedLanguage => {
  return { type: CHANGE_LANGUAGE, lang: selectedLanguage };
};
