import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { searchMovies, image185 } from "../api/api";

export default function SearchResults({ route, navigation }) {
  const { query } = route.params;
  const [results, setResults] = useState([]); // ✅ TO‘G‘RI

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      const data = await searchMovies(query);
      if (data?.results) {
        setResults(data.results);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <View className="flex-1 bg-slate-900 p-4">
      <Text className="text-white text-xl font-semibold mb-4">
        Results for: "{query}"
      </Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row mb-4"
            onPress={() =>
              navigation.navigate("Detailed", { movieId: item.id })
            }
          >
            <Image
              source={{ uri: image185(item.poster_path) }}
              className="w-24 h-36 rounded-xl"
            />
            <View className="ml-4 justify-center">
              <Text
                className="text-white text-lg font-semibold"
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text className="text-gray-300 text-sm">{item.release_date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
