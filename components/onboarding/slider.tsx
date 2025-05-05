import { HEIGHT, MIN_LEDGE } from "@/configs/constants";
import React, { JSX } from "react";
import { Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useVector } from "react-native-redash";
import { Side } from "./wave";
interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

const Slider = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
}: SliderProps) => {
  const havPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const activeSide = useSharedValue(Side.NONE);
  const isTransitionLeft = useSharedValue(false);
  const isTransitionRight = useSharedValue(false);
  const left = useVector(MIN_LEDGE, HEIGHT / 2);
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
};

export default Slider;
