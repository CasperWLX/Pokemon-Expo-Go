import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingCircle = () => {
  return (
    <View >
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};


export default LoadingCircle;
