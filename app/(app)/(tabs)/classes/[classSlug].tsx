import { Pressable, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function Class() {
  const { classSlug } = useLocalSearchParams<{ classSlug: string }>();

  return (
    <View>
      <Stack.Screen options={{ title: classSlug }} />
      <Text>{classSlug}</Text>
      <Pressable
        onPress={() => {
          fetch(`/api/fave-status?workId=${classSlug}`);
        }}
      >
        <Text>Add to favourites</Text>
      </Pressable>
    </View>
  );
}
