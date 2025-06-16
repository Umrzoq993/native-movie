import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { StarIcon, CalendarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/api";

const { width, height } = Dimensions.get("window");

export default function MovieCard({ movie }) {
  const CARD_WIDTH = width * 0.5;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detailed", { movie })}
      style={{ width: CARD_WIDTH }}
      className="rounded-xl overflow-hidden bg-zinc-800"
    >
      <Image
        source={{ uri: image500(movie.poster_path) }}
        style={{
          width: "100%",
          aspectRatio: 2 / 3,
          maxHeight: height * 0.5,
        }}
        resizeMode="cover"
      />

      <View className="p-3 space-y-1">
        <Text className="text-white text-lg font-semibold" numberOfLines={2}>
          {movie.title}
        </Text>

        <View className="flex-row items-center gap-2">
          <CalendarIcon color="gray" size={16} />
          <Text className="text-gray-300 text-sm">{movie.release_date}</Text>
        </View>

        <View className="flex-row items-center gap-1">
          <StarIcon color="#facc15" size={16} />
          <Text className="text-yellow-400 font-medium text-sm">
            {movie.vote_average?.toFixed(1)} / 10
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
