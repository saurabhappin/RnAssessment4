import React, {useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import axios from 'axios';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Tab1 = () => {
  const [users, setUsers] = useState([]);

  const listRef = useRef();
  (async function fetchUsers() {
    //using try catch blocks for error handling.
    try {
      const response = await axios.get('https://fakestoreapi.com/products'); //using axios to get api data
      setUsers(response.data);
    } catch (error) {
      console.log('Error in fetching data ' + error);
    }
  })();

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        key={2}
        ref={listRef}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.image}} />
            </View>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.ratingAndPrice}>
              <Text style={styles.rating}>Rating: {item.rating.rate}</Text>
              <Text style={styles.price}>₹{item.price}</Text>
            </View>
            <View style={styles.cardBottom}>
              <Text style={styles.unitsLeft}>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Text style={{color: 'red'}}>*</Text>
                {item.rating.count} units left!
              </Text>
              <Wishlist />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const Wishlist = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const pressed = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <TouchableOpacity onPress={pressed} activeOpacity={1}>
      <View style={styles.heart}>
        {!isFavorite && (
          <LottieView
            source={require('../assets/animation_lm69nx5r.json')}
            autoPlay={false}
            loop={false}
            style={styles.wishlistAnimation}
          />
        )}
        {isFavorite && (
          <LottieView
            source={require('../assets/animation_lm69nx5r.json')}
            autoPlay={true}
            loop={false}
            progress={1}
            speed={5}
            style={styles.wishlistAnimation}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    paddingBottom: 10,
  },
  card: {
    flex: 0.5,
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#222',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 0.7,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderRadius: 12,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  textContainer: {
    flex: 0.3,
  },
  rating: {
    fontWeight: '500',
  },
  price: {
    fontWeight: '700',
  },
  ratingAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unitsLeft: {
    paddingVertical: 10,
  },
  heart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 50,
  },
  wishlistAnimation: {
    position: 'relative',
    width: 100,
    height: 100,
    margin: -25,
    marginRight: -87,
  },
});

export default Tab1;
