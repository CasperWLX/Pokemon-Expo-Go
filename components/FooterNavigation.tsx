import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FooterNavigation = () => {

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