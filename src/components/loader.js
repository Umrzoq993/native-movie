import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("window");

export default function Loader() {
  return (
    <View style={styles.overlay}>
      <LottieView
        source={require("../../assets/loader.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(2, 6, 23, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  animation: {
    width: width * 0.25,
    height: width * 0.25,
  },
});
