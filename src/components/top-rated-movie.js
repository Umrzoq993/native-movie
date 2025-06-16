import { View, Text, Dimensions } from "react-native";
import { CarouselMomentum } from "react-native-momentum-carousel";
import MovieCard from "./movie-card";

const { width } = Dimensions.get("window");

export default function TopRatedMovie({ topRated }) {
  const renderItem = ({ item }) => <MovieCard movie={item} />;

  return (
    <View className="mb-5">
      <Text className="text-white text-xl font-bold mx-4 mb-5">
        Top Rated Movies
      </Text>
      <CarouselMomentum
        data={topRated}
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
