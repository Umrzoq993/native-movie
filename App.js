import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-lg font-bold">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
