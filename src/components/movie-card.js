import { View, Text, Image } from "react-native";

export default function MovieCard({ movie }) {
  return (
    <View className="w-60 h-80 rounded-xl overflow-hidden bg-slate-800">
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        className="w-full h-4/5"
        resizeMode="cover"
      />
      <View className="p-2">
        <Text className="text-white font-semibold text-base">
          {movie.title}
        </Text>
      </View>
    </View>
  );
}
