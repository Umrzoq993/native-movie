import React from "react";
import { View, Text, StatusBar, Button } from "react-native";

const Detailed = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-lg font-bold">Detailed</Text>
      <StatusBar style="light" />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Detailed;
