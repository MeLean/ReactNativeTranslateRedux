import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./Navigator";
import { createStore, combineReducers } from "redux";
import languageReducer from "./store/reducers/languageReducer";
import { Provider } from "react-redux";

const combinedReducer = combineReducers({
  languages: languageReducer
});

const reduxStore = createStore(combinedReducer);

export default function App() {
  return (
    <Provider store={reduxStore}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
