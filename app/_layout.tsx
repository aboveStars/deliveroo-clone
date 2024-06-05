import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "../global.css";
import HomeScreen from "@/components/Screens/HomeScreen";
import RestaurantScreen from "@/components/Screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
