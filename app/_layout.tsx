import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import HomeScreen from "@/components/Screens/HomeScreen";
import RestaurantScreen from "@/components/Screens/RestaurantScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "../global.css";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
