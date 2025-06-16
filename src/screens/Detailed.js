import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftIcon,
  StarIcon,
  CalendarIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/api";

const { width, height } = Dimensions.get("window");

export default function Detailed({ route }) {
  const navigation = useNavigation();
  const { movie } = route.params;

  return (
    <ScrollView className="flex-1 bg-slate-900">
      <SafeAreaView>
        <View className="relative">
          <Image
            source={{ uri: image500(movie.poster_path) }}
            style={{ width, height: height * 0.6 }}
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-10 left-5 bg-black/60 p-2 rounded-full"
          >
            <ArrowLeftIcon size={25} color="white" />
          </TouchableOpacity>
        </View>

        <View className="p-4 space-y-3">
          <Text className="text-white text-3xl font-bold">
            {movie.title || "No Title"}
          </Text>

          <View className="flex-row items-center gap-2">
            <CalendarIcon color="gray" size={16} />
            <Text className="text-gray-400 text-sm">{movie.release_date}</Text>
          </View>

          <View className="flex-row items-center gap-1">
            <StarIcon color="#facc15" size={16} />
            <Text className="text-yellow-400 font-medium text-sm">
              {movie.vote_average?.toFixed(1)} / 10
            </Text>
          </View>

          <Text className="text-gray-300 text-base leading-6">
            {movie.overview || "No description available."}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
