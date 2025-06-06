import Slide from "@/components/onboarding/slide";
import Slider from "@/components/onboarding/slider";
import { onBoardingSlides } from "@/configs/constants";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const OnboardingScreen = () => {
  const [index, setIndex] = useState(0);
  const prev = onBoardingSlides[index - 1];
  const next = onBoardingSlides[index + 1];
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slider
        key={index}
        index={index}
        setIndex={setIndex}
        prev={
          prev && (
            <Slide
              slide={prev}
              totalSlides={onBoardingSlides.length}
              setIndex={setIndex}
              index={index}
            />
          )
        }
        next={
          next && (
            <Slide
              slide={next}
              totalSlides={onBoardingSlides.length}
              setIndex={setIndex}
              index={index}
            />
          )
        }
      >
        <Slide
          slide={onBoardingSlides[index]}
          index={index}
          setIndex={setIndex}
          totalSlides={onBoardingSlides.length}
        />
      </Slider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default OnboardingScreen;
