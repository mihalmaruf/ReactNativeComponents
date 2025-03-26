import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title='Decrement' onPress={() => {
        if (count > 0) {
            setCount(count - 1)
        }
      }} />
    <Button title="RESET" onPress={() => setCount(0)} />
    </View>
  )
}

export default Counter