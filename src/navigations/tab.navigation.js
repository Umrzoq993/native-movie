import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Detailed from "../screens/Detailed";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name == "Detailed") {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons color={color} size={size} name={iconName} />;
          },
          tabBarActiveTintColor: "crimson",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Detailed"
          component={Detailed}
          options={{ headerShown: false, tabBarBadge: 7 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
