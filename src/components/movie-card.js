import { View, Text, Image } from "react-native";
import { StarIcon, CalendarIcon } from "react-native-heroicons/solid";

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View className="rounded-xl overflow-hidden bg-zinc-800">
      {/* Movie poster */}
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-72"
        resizeMode="cover"
      />

      {/* Movie info */}
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
            {movie.vote_average.toFixed(1)} / 10
          </Text>
        </View>
      </View>
    </View>
  );
}
