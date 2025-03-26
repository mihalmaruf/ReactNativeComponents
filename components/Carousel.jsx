import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'

const {width} = Dimensions.get('window')
const carouselData = [
    {
      id: "1",
      title: "First Item",
      imageUrl: "https://picsum.photos/300/200?random=1",
    },
    {
      id: "2",
      title: "Second Item",
      imageUrl: "https://picsum.photos/300/200?random=2",
    },
    {
      id: "3",
      title: "Third Item",
      imageUrl: "https://picsum.photos/300/200?random=3",
    },
  ];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const flatListRef = useRef(null);
    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
          setIndex(viewableItems[0].index);
        }
      });
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50});

    const scrollToIndex = (i) => {
        flatListRef.current?.scrollToIndex({index: i, animated: true});
    };
  return (
    <View style={styles.container}>
      <FlatList
      ref={flatListRef}
      data={carouselData}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={[styles.slide, {width}]}>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      />

      <View style={styles.pagination}>
        {carouselData.map((item, i) => (
            <TouchableOpacity
            key={i}
            style={[styles.dot, index === i && styles.activeDot]}
            onPress={() => scrollToIndex(i)}
            />
        ))}
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() =>
            scrollToIndex((index - 1 + carouselData.length) % carouselData.length)
          }
        >
          <Text style={styles.controlText}>Previous</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>
          {index + 1} / {carouselData.length}
        </Text>

        <TouchableOpacity
          onPress={() => scrollToIndex((index + 1) % carouselData.length)}
        >
          <Text style={styles.controlText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },
    slide: { alignItems: "center", padding: 20 },
    image: { width: "90%", height: 200, borderRadius: 10, marginBottom: 10 },
    title: { fontSize: 20, fontWeight: "bold", color: "#333" },
    pagination: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
    },
    dot: {
      width: 10,
      height: 10,
      margin: 5,
      borderRadius: 5,
      backgroundColor: "#ccc",
    },
    activeDot: {
      backgroundColor: "#333",
    },
    controls: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 20,
    },
    controlText: {
      color: "#333",
      fontWeight: "bold",
      fontSize: 16,
    },
    counter: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
  });

export default Carousel