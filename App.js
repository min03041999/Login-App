import { Provider as ProviderRedux } from "react-redux";
import { store } from "./src/store/store";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { StartScreen } from "./src/screens/StartScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import { RegisterScreen } from "./src/screens/RegisterScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProviderRedux store={store}>
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ProviderRedux>
  );
}
