import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
const AuthModal = () => {
  return (
    <BlurView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: windowWidth(420),
          height: windowHeight(250),
          marginHorizontal: windowWidth(50),
          backgroundColor: "#fff",
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={(e) => e.stopPropagation()}
      >
        <Text
          style={{ fontSize: fontSizes.FONT35, fontFamily: "Poppins_700Bold" }}
        >
          Join to LearnIt
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT17,
            paddingTop: windowHeight(5),
            fontFamily: "Poppins_300Light",
          }}
        >
          It's easier than you imagination!
        </Text>
        <View
          style={{
            paddingVertical: windowHeight(10),
            flexDirection: "row",
            gap: windowWidth(20),
          }}
        >
          <Pressable>
            <Image
              src={require("@/assets/images/onboarding/google.png")}
              style={{
                width: windowHeight(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              src={require("@/assets/images/onboarding/github.png")}
              style={{
                width: windowHeight(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              src={require("@/assets/images/onboarding/apple.png")}
              style={{
                width: windowHeight(40),
                height: windowHeight(40),
                resizeMode: "contain",
              }}
            />
          </Pressable>
        </View>
      </Pressable>
    </BlurView>
  );
};

export default AuthModal;
