import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
  searchMovies,
} from "../api/api";
import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import TopRatedMovie from "../components/top-rated-movie";
import PopularMovie from "../components/popular-movie";
import MovieCard from "../components/movie-card";
import { XMarkIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    const [t, u, p, r] = await Promise.all([
      fetchTrendingMovies(),
      fetchUpcomingMovies(),
      fetchPopularMovies(),
      fetchTopRatedMovies(),
    ]);
    if (t?.results) setTrendingMovies(t.results);
    if (u?.results) setUpComing(u.results);
    if (p?.results) setPopular(p.results);
    if (r?.results) setTopRated(r.results);
  };

  // 🔍 API orqali qidiruv
  useEffect(() => {
    const searchFromAPI = async () => {
      if (query.trim().length === 0) {
        setFiltered([]);
        return;
      }
      const res = await searchMovies(query);
      if (res?.results) setFiltered(res.results);
    };

    searchFromAPI();
  }, [query]);

  const headerScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -10],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar style="light" backgroundColor="#020617" translucent={false} />
      <SafeAreaView className="flex-1">
        <Animated.View
          style={{
            transform: [
              { scale: headerScale },
              { translateY: headerTranslateY },
            ],
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 8,
            zIndex: 10,
          }}
        >
          <View className="flex-row items-center space-x-2 bg-zinc-800 rounded-xl px-4 py-2">
            <MagnifyingGlassIcon color="white" size={20} />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search movies..."
              placeholderTextColor="#ccc"
              className="flex-1 text-white"
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery("")}>
                <XMarkIcon color="white" size={20} />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>

        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {query.length > 0 && filtered.length > 0 && (
            <View className="mt-4 px-4 space-y-4">
              <Text className="text-white text-lg font-bold">
                🔍 Results for: <Text className="text-red-400">{query}</Text>
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {filtered.map((movie, idx) => (
                  <View key={idx} className="mr-4">
                    <MovieCard movie={movie} />
                  </View>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Asl bo‘limlar */}
          {query.length === 0 && (
            <>
              {trendingMovies.length > 0 && (
                <TrendingMovie trendingMovies={trendingMovies} />
              )}
              {upComing.length > 0 && (
                <UpcomingMovie
                  upcomingMovies={upComing}
                  title="Upcoming Movies"
                />
              )}
              {popular.length > 0 && (
                <PopularMovie popular={popular} title="Popular Movies" />
              )}
              {topRated.length > 0 && (
                <TopRatedMovie topRated={topRated} title="Top Rated Movies" />
              )}
            </>
          )}
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
}
