import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Acercade from "./screens/Acercade";
import pantalla2 from "./screens/pantalla2";
import Ailab from "./screens/Ailab";
import uni3 from "./screens/uni3";
import uni2 from "./screens/uni2";
import uni4 from "./screens/uni4";
import uni5 from "./screens/uni5";

const Stack = createNativeStackNavigator();

function Principal() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen 
      name="UniversidadesScreen" 
      component={pantalla2}  
      options={{ headerShown: false }}/>
      <Stack.Screen
        name="Ailab"
        component={Ailab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uni2"
        component={uni2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uni3"
        component={uni3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uni4"
        component={uni4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="uni5"
        component={uni5}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Principal") {
              iconName = focused
                ? "home"
                : "home-outline";
            } else if (route.name === "Oportunidades") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Universidades") {
              iconName = focused ? "school" : "school-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#EE627E",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 5, height: 60 }
        })}
      >
        <Tab.Screen
          name="Principal"
          component={Acercade}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Universidades" component={Principal} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}