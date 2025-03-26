import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

const Tabs = () => {
const [activeTab, setActiveTab] = useState("Home")
const tabs = ["Home", "Profile", "Settings"];

const renderContent = () => {
  switch (activeTab) {
    case "Home":
      return <Text>Home Content</Text>
    case "Profile":
      return <Text>Profile Content</Text>
    case "Settings":
      return <Text>Settings Content</Text>
    default:
      return null;
  }
}

//FOR FLATLIST
const renderTab = ({ item }) => (
  <TouchableOpacity
    onPress={() => setActiveTab(item)}
    style={[
      styles.tabButton,
      activeTab === item && styles.activeTabButton
    ]}
  >
    <Text style={[
      styles.tabText,
      activeTab === item && styles.activeTabText
    ]}>
      {item}
    </Text>
  </TouchableOpacity>
);

    return (
      // <View>
      //   <View>
      //     {tabs.map((tab) => (
      //       <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
      //       <Text>{tab}</Text>
      //     </TouchableOpacity>
      //     ))}
      //   </View>

      //   <View>{renderContent()}</View>
      // </View>

      <View style={styles.container}>
      {/* Tab Buttons */}
      <FlatList
        horizontal
        data={tabs}
        renderItem={renderTab}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      />

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tabButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#6200ee",
  },
  tabText: {
    fontSize: 14,
    color: "#757575",
    fontWeight: "500",
  },
  activeTabText: {
    color: "#6200ee",
    fontWeight: "600",
  },
  contentContainer: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
  },
});

export default Tabs