import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={} />
      <Stack.Screen name="Notifications" component={} />
      <Stack.Screen name="Profile" component={} />
      <Stack.Screen name="Settings" component={} />
    </Stack.Navigator>
  );
}