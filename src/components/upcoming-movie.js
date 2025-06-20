import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { image185 } from "../api/api";

const { width, height } = Dimensions.get("window");

export default function UpcomingMovie({ upcomingMovies, title }) {
  return (
    <View className="mb-8 space-y-4 px-4">
      <Text className="text-xl text-red-400 font-semibold">
        {title || "Upcoming Movies"}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
      >
        {upcomingMovies?.map((item, index) => (
          <View className="space-y-1 mr-4" key={item.id || index}>
            <Image
              source={{ uri: image185(item?.poster_path) }}
              className="rounded-3xl"
              style={{ width: width * 0.3, height: height * 0.2 }}
            />
            <Text className="text-white text-sm" numberOfLines={1}>
              {item?.title?.length > 12
                ? item?.title.slice(0, 12) + "..."
                : item?.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
