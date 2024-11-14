import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";

type ClassItem = {
  name: string;
  price: number;
  durationInMinutes: number;
  id: string;
  slug: string;
};

async function fakeClassesApi(): Promise<ClassItem[]> {
  const awaitTimeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await awaitTimeout(1000);

  return [
    {
      name: "Infants Boxing Class (5 – 8 yrs old)",
      price: 6.0,
      durationInMinutes: 60,
      id: "infants-boxing",
      slug: "infants-boxing",
    },
    {
      name: "Junior Academy (Beginners to Competitive Amateur Boxing)",
      price: 6.0,
      durationInMinutes: 75,
      id: "junior-academy",
      slug: "junior-academy",
    },
    {
      name: "Junior Competitive Squad (Carded & Invited Amateur Boxers)",
      price: 3.5,
      durationInMinutes: 90,
      id: "junior-competitive",
      slug: "junior-competitive",
    },
    {
      name: "Junior Progression Group (Development Boxing Class)",
      price: 6.0,
      durationInMinutes: 75,
      id: "junior-progression",
      slug: "junior-progression",
    },
    {
      name: "Recreational Boxing – Weekday Lunchtime Class",
      price: 8.0,
      durationInMinutes: 90,
      id: "recreational-weekday-lunch",
      slug: "recreational-weekday-lunch",
    },
    {
      name: "Recreational Boxing – Monday & Wednesday Evening Class",
      price: 8.0,
      durationInMinutes: 90,
      id: "recreational-mon-wed",
      slug: "recreational-mon-wed",
    },
    {
      name: "Recreational Boxing – Tuesday & Thursday Evening Class",
      price: 8.0,
      durationInMinutes: 90,
      id: "recreational-tue-thu",
      slug: "recreational-tue-thu",
    },
    {
      name: "Mental Well-Being Recreational Boxing Class",
      price: 6.0,
      durationInMinutes: 60,
      id: "mental-wellbeing",
      slug: "mental-wellbeing",
    },
    {
      name: "Recreational Boxing – Saturday Lunchtime Class",
      price: 8.0,
      durationInMinutes: 90,
      id: "recreational-saturday",
      slug: "recreational-saturday",
    },
    {
      name: "Senior Academy (Beginners to Competitive Amateur Boxing)",
      price: 6.0,
      durationInMinutes: 90,
      id: "senior-academy",
      slug: "senior-academy",
    },
    {
      name: "Senior Competitive Squad (Carded & Invited Amateur Boxers)",
      price: 5.0,
      durationInMinutes: 120,
      id: "senior-competitive",
      slug: "senior-competitive",
    },
  ];
}

export default function ClassList() {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  useEffect(() => {
    fakeClassesApi().then(setClasses);
  }, []);

  return (
    <View>
      <Text className="text-4xl font-bold">ClassList</Text>
      <View className="flex flex-col gap-2">
        {classes.map((c) => (
          <View key={c.id} className="flex flex-col gap-2">
            <Image
              source={"https://placehold.co/1000x1000"}
              className="aspect-square h-40 w-40 bg-gray-600 border-none"
            />
            <Link href={`/classes/${c.slug}`} className="text-lg font-bold">
              {c.name}
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
