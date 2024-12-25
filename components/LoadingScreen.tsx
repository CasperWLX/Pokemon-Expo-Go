import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import LoadingCircle from './LoadingCircle'


const LoadingScreen = () => {
  return (
    <ImageBackground
			className="h-screen-safe w-screen"
			source={require("@/assets/images/splash.png")}
			style={{ flex: 1 }}
		>
			<LoadingCircle />
		</ImageBackground>
  )
}

export default LoadingScreen