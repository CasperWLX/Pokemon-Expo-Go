import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const FooterNavigation = () => {

    const styles = StyleSheet.create({
        textContainer: {
            padding: 2 
        }
    })
  return (
    <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333',  // Dark background for navbar
        height: 60,
      }}>
        <TouchableOpacity>
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>User</Text>
        </TouchableOpacity>
    </View>
  )
}



export default FooterNavigation