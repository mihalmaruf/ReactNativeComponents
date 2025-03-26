import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Dropdown = () => {
    const items = ["Profile", "Settings", "Logout"];
    const [isOpen, setIsOpen] = useState(false);
  return (
    <View>
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
            <Text>Dropdown Menu</Text>
        </TouchableOpacity>

        {isOpen && (
            <View>
                {items.map((item, index) => (
                    <TouchableOpacity key={index}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )}
    </View>
  )
}

export default Dropdown