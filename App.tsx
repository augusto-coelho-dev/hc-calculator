import React  from "react";
import { StatusBar } from 'expo-status-bar';

import { useFonts } from "expo-font";
import { Blinker_400Regular, Blinker_600SemiBold } from "@expo-google-fonts/blinker";

import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";

export default function App() {

  const [fontLoaded] = useFonts({
    Blinker_400Regular,
    Blinker_600SemiBold
  });

  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <>
      <StatusBar 
          backgroundColor="transparent"
          translucent
      />
      <Routes/>
    </>

  );
}
