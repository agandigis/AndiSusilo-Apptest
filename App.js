import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Qontact from "./src/screens/Qontact";
import DetailQontact from "./src/screens/DetailQontact";
import CreateQontact from "./src/screens/CreateQontact";
import EditQontact from "./src/screens/EditQontact";
import { Provider } from "react-redux";
import store from "./src/store";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Qontact" component={Qontact} />
          <Stack.Screen name="DetailQontact" component={DetailQontact} />
          <Stack.Screen name="CreateQontact" component={CreateQontact} />
          <Stack.Screen name="EditQontact" component={EditQontact} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
