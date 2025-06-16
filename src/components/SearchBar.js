import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <View className="flex-row items-center bg-slate-800 p-2 rounded-xl mx-4 mt-4">
      <TextInput
        placeholder="Search Movies"
        placeholderTextColor="#a1a1aa"
        value={query}
        onChangeText={setQuery}
        className="flex-1 text-white px-2"
      />
      <TouchableOpacity onPress={handleSearch}>
        <MagnifyingGlassIcon size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
