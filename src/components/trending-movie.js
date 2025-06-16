import { View, Text, Dimensions } from "react-native";
import { CarouselMomentum } from "react-native-momentum-carousel";
import MovieCard from "./movie-card";

const { width, height } = Dimensions.get("window");

export default function TrendingMovie({ trendingMovies }) {
  const renderItem = ({ item }) => <MovieCard movie={item} />;

  return (
    <View className="mb-5">
      <CarouselMomentum
        data={trendingMovies}
        sliderWidth={width}
        itemWidth={width * 0.5}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onSnap={() => {}}
        autoPlay={true}
        autoPlayInterval={5000}
        loop={true}
        inactiveScale={0.8}
        showPagination={false}
        animation="Stack"
        customAnimation={false}
      />
    </View>
  );
}
