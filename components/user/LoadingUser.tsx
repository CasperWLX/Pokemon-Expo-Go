import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingUser = () => {
  return (
    <View >
      <ActivityIndicator size={"large"} color={"white"} />
    </View>
  );
};


export default LoadingUser;
