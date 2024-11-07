import React, { useEffect } from "react";
import { Platform, View } from "react-native";
import { Image } from "expo-image";
import { TabButton } from "@/components/TabButton";
import { TabTrigger, TabList, TabSlot, Tabs } from "expo-router/ui";
import { Link, usePathname, useRouter } from "expo-router";
import classNames from "classnames";
import { useMediaQuery } from "@/constants/useMediaQuery";
import { Drawer } from "react-native-drawer-layout";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const { isMobile } = useMediaQuery();

  const [open, setOpen] = React.useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isMobile && Platform.OS === "web") {
      setOpen(false);
    }
  }, [pathname, isMobile]);

  const tabList = (
    <TabList>
      <TabTrigger name="index" href="/" />
      <TabTrigger name="exhibits" href="/exhibits" reset="always" />
      <TabTrigger name="visit" href="/visit" />
      <TabTrigger name="profile" href="/profile" />
    </TabList>
  );

  const tabVisual = (
    <View
      className={classNames(
        "flex-row justify-between",
        "py-3 sm:py-6",
        "px-6 sm:px-8",
        "mx-2 sm:mx-0",
        "sm:justify-end sm:gap-x-4 sm:shadow-sm",
        "bg-white",
        "bottom-safe-offset-2 sm:bottom-safe-offset-0", // keep the tabs above safe ares
        "rounded-full sm:rounded-none", // round the corners
        "absolute right-0 left-0 sm:relative", // position above content
        "shadow-sm sm:shadow-none" // yum, shadows!
      )}
    >
      <TabTrigger name="index" asChild>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger name="exhibits" asChild reset="always">
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild>
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger name="profile" asChild>
        <TabButton icon="person">Profile</TabButton>
      </TabTrigger>
    </View>
  );

  if (isMobile && Platform.OS === "web") {
    return (
      <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
          return (
            <View className={classNames()}>
              <Link href="./" asChild>
                <TabButton icon="museum">Home</TabButton>
              </Link>
              <Link href="./exhibits" asChild>
                <TabButton icon="palette">Exhibits</TabButton>
              </Link>
              <Link href="./visit" asChild>
                <TabButton icon="map">Visit</TabButton>
              </Link>
              <Link href="./profile" asChild>
                <TabButton icon="person">Profile</TabButton>
              </Link>
            </View>
          );
        }}
      >
        <View className="flex-1">
          <View className="flex-row justify-between items-center py-3 px-6">
            <FontAwesome name="bars" size={24} onPress={() => setOpen(true)} />
            <View className={classNames("h-10 w-52")}>
              <Image
                source={require("@/assets/images/logo.svg")}
                className="w-full h-full"
              />
            </View>
          </View>
          <Tabs className="flex-1">
            <View className="flex-1">
              <TabSlot />
            </View>
            {tabList}
          </Tabs>
        </View>
      </Drawer>
    );
  }

  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabList}
        {tabVisual}
      </Tabs>
      <View
        className={classNames(
          "hidden sm:inline",
          "absolute left-6 top-5 h-10 w-52"
        )}
      >
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-full h-full"
        />
      </View>
    </View>
  );
}
