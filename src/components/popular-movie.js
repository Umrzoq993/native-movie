import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { image185 } from "../api/api";

const { width, height } = Dimensions.get("window");

export default function PopularMovie({ popular, title }) {
  return (
    <View className="mb-8 space-y-4 px-4">
      <Text className="text-xl text-green-400 font-semibold">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        {popular?.map((item, index) => (
          <View className="space-y-1 mr-4" key={index}>
            <Image
              source={{ uri: image185(item?.poster_path) }}
              className="rounded-3xl"
              style={{ width: width * 0.3, height: height * 0.2 }}
            />
            <Text className="text-white">
              {item?.title.length > 12
                ? item?.title.slice(0, 12) + "..."
                : item?.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
