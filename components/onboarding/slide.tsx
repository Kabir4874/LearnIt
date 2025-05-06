import { HEIGHT, WIDTH } from "@/configs/constants";
import { fontSizes, SCREEN_WIDTH } from "@/themes/app.constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { Defs, RadialGradient, Rect, Stop, Svg } from "react-native-svg";
interface SlideProps {
  slide: onBoardingSlidesTypes;
  index: number;
  setIndex: (value: number) => void;
  totalSlides: number;
}
const Slide = ({ slide, index, setIndex, totalSlides }: SlideProps) => {
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={slide.color} />
            <Stop offset="100%" stopColor={slide.color} />
          </RadialGradient>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={WIDTH}
          height={HEIGHT}
          fill={"url(#gradient)"}
        />
      </Svg>
      <View style={styles.container}>
        <View>{slide.image}</View>
        <View>
          <View
            style={{
              width: SCREEN_WIDTH * 1,
              paddingHorizontal: verticalScale(25),
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.FONT30,
                fontWeight: "600",
                color: "#05030d",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {slide.title}
            </Text>
            <Text
              style={{
                fontSize: fontSizes.FONT30,
                fontWeight: "600",
                color: "#05030d",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {slide.secondTitle}
            </Text>
            <Text
              style={{
                paddingVertical: verticalScale(4),
                fontSize: fontSizes.FONT18,
                color: "#3e3b54",
                fontFamily: "Poppins_300Light",
              }}
            >
              {slide.subTitle}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: scale(60),
    paddingTop: verticalScale(100),
    alignItems: "center",
  },
});

export default Slide;
