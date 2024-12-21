import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React from "react";

const LoadingApp = () => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={require("@/assets/images/splash-screen.jpg")}
        style={{
          flex: 1,
          transform: [{ scale: 1.1 }], // Zooms in the background
          position: "absolute",
          width: '100%',
          height: '100%',
          right: 6.8,
          top: 3,
        }}
      />
      <ActivityIndicator
        size="large"
        color="black"
        style={{
          position: "absolute",
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: [{ translateX: -12 }, { translateY: -12 }],
        }}
      />
    </View>
  );
};

export default LoadingApp;
