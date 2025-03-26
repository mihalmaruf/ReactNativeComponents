import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
    return (
      <View>
        <TouchableOpacity onPress={() => setIsOn(!isOn)}>
          <Text>Switch: {isOn ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Switch