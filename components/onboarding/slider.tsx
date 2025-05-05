import {
  HEIGHT,
  LEFT_SNAP_POINTS,
  MARGIN_WIDTH,
  MIN_LEDGE,
  PREV,
  WIDTH,
} from "@/configs/constants";
import React, { JSX } from "react";
import { Text, View } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { snapPoint, useVector } from "react-native-redash";
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
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const activeSide = useSharedValue(Side.NONE);
  const isTransitionLeft = useSharedValue(false);
  const isTransitionRight = useSharedValue(false);
  const left = useVector(MIN_LEDGE, HEIGHT / 2);
  const right = useVector(MIN_LEDGE, HEIGHT / 2);
  const panGesture = Gesture.Pan()
    .onStart(({ x }) => {
      if (x <= MARGIN_WIDTH && hasPrev) {
        activeSide.value = Side.LEFT;
        zIndex.value = 100;
      } else if (x >= WIDTH - MARGIN_WIDTH && hasNext) {
        activeSide.value = Side.RIGHT;
      } else {
        activeSide.value = Side.NONE;
      }
    })
    .onUpdate(({ x, y }) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = Math.max(x, MARGIN_WIDTH);
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = Math.max(WIDTH - x, MARGIN_WIDTH);
      }
    })
    .onEnd(({ x, velocityX, velocityY }) => {
      if (activeSide.value === Side.LEFT) {
        const dest = snapPoint(x, velocityX, LEFT_SNAP_POINTS);
        isTransitionLeft.value = dest === PREV;
      }
    });
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
};

export default Slider;
