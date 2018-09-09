import React from "react";
import { Text, View } from "react-native";
import styles from "./ViewportUnits.css";

export const ViewportUnits = () => {
  return (
    <View className={styles.wrapper}>
      <View className={styles.div}>
        <Text className={styles.h1}>
          A box that is always in the middle, vertically and horizontally.
        </Text>
      </View>
    </View>
  );
};
