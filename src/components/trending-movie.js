import { View, Text, FlatList, Dimensions } from "react-native";
import MovieCard from "./movie-card";

const { width } = Dimensions.get("window");

export default function TrendingMovie({ trendingMovies }) {
  return (
    <View className="mb-5">
      <Text className="text-white text-xl font-bold mx-4 mb-5">
        Trending Movies
      </Text>

      <FlatList
        horizontal
        data={trendingMovies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.7 + 16}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View className="mr-4 w-[280px]">
            <MovieCard movie={item} />
          </View>
        )}
      />
    </View>
  );
}
