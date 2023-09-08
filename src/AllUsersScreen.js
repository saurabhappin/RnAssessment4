import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getContacts} from './ReduxHandler.js/Action';
import {CaretRight} from '../assets/svgs';

export default function AllUsersSreen({navigation}) {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.fetchUsersData.data);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  // console.log(Data);
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>Contacts</Text>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('User Details')}>
            <View style={styles.card}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: item.avatar}} />
              </View>
              <View style={styles.ratingAndPrice}>
                <Text style={styles.title}>
                  {item.first_name + ' ' + item.last_name}
                </Text>
                <Text style={styles.rating}>{item.phone_number}</Text>
              </View>
              <View style={styles.caret}>
                <CaretRight height={20} width={20}/>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    letterSpacing: 0.64,
    fontSize: 28,
    textAlign: 'center',
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: '30%',
    marginVertical: '10%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  description: {
    paddingTop: 20,
    letterSpacing: 0.64,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 30,
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
    height: 30,
    width: 30,
    alignSelf: 'center',
    padding: 5,
    paddingLeft: 0,
  },
  imageContainer: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    flex: 0.121,
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 0.3,
  },
  rating: {
    fontWeight: '400',
    fontSize: 13,
  },
  price: {
    fontWeight: '700',
  },
  ratingAndPrice: {
    flex: 0.7,
    padding: 5,
    justifyContent: 'center',
  },
  unitsLeft: {
    paddingVertical: 10,
  },
  caret: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
