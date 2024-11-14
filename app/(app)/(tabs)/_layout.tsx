import React from "react";
import { Stack, Tabs } from "expo-router";
import customColors from "@/constants/colors";
import colors from "@/constants/colors";
import { TabBarIcon } from "@/components/TabBarIcon";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: colors.white },
        headerShown: false,
        lazy: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: customColors.tint,
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="museum" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exhibits"
        options={{
          title: "Exhibits",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="palette" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="visit"
        options={{
          title: "Visit",
          tabBarIcon: ({ color }) => <TabBarIcon type="MaterialIcons" name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: "Classes",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="palette" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon type="MaterialIcons" name="person" color={color} />
          ),
        }}
      />

      <Stack.Screen
        name="works/[workId]"
        options={{
          headerShown: false,
          ...Platform.select({
            web: {
              presentation: "transparentModal",
              animation: "fade",
            },
            default: {
              presentation: "modal",
            },
          }),
        }}
      />
    </Tabs>
  );
}
