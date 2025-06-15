import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/api";
import { useEffect, useState } from "react";
import TrendingMovie from "../components/trending-movie";
import UpcomingMovie from "../components/upcoming-movie";
import TopRatedMovie from "../components/top-rated-movie";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) {
      setTrendingMovies(data.results);
    } else {
      console.error("Failed to fetch trending movies:", data);
    }
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) {
      setUpComing(data.results);
    } else {
      console.error("Failed to fetch upcoming movies:", data);
    }
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) {
      setTopRated(data.results);
    } else {
      console.error("Failed to fetch top-rated movies:", data);
    }
  };

  // Call the function to fetch trending movies when the component mounts
  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar style="light" />
        <View className="flex flex-row items-center justify-between p-4">
          <Image source={require("../../assets/logo.png")} />
          <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {trendingMovies?.length > 0 && (
          <TrendingMovie trendingMovies={trendingMovies} />
        )}
        {upComing?.length > 0 && <UpcomingMovie />}
        {topRated?.length > 0 && <TopRatedMovie />}
      </ScrollView>
    </View>
  );
};

export default Home;
