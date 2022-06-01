import React from "react";
import { Text, Pressable, StyleProp } from "react-native";
import { useTailwind } from "tailwind-rn";

export interface IAppButtonProps {
  title: string;
  onPress: (e: any) => void;
  buttonStyle?: StyleProp<any>;
  textStyle?: StyleProp<any>;
}

export const AppButton = (props: IAppButtonProps) => {
  const tailwind = useTailwind();
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        tailwind("max-w-xs bg-red p-3 rounded text-center"),
        props.buttonStyle,
      ]}
    >
      <Text style={[tailwind("text-white font-semibold"), props.textStyle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
