import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "./movie-card";

const { width } = Dimensions.get("window");

export default function TrendingMovie({ trendingMovies }) {
  return (
    <View className="mb-5">
      <Text className="text-white text-xl mx-4 mb-5">Trending Movies</Text>
      <Carousel
        width={width * 0.7}
        height={300}
        data={trendingMovies}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}
