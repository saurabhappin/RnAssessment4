import React, {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import {getContactDetails} from '../redux/Action';
import Colors from '../../assets/colors';
import {BackIcon2, EditIcon} from '../../assets/svgs';

const Contact = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.fetchSingleUserData.data);
  useEffect(() => {
    dispatch(getContactDetails());
  }, []);

  return (
    <SafeAreaView>
      <View key={data.id}>
        <View style={styles.topView}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('Contacts')}>
            <BackIcon2 />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editIcon}>
            <EditIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data.avatar}} />
        </View>
        <Text style={styles.name}>
          {data.first_name + ' ' + data.last_name}
        </Text>
        <Text style={styles.phone}>{data.phone_number}</Text>
        <View style={styles.textArea}>
          <Text style={styles.subText}>Gender: </Text>
          <Text style={styles.mainText}>{data.gender}</Text>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.subText}>Email: </Text>
          <Text style={styles.mainText}>{data.email}</Text>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.subText}>Date of Birth: </Text>
          <Text style={styles.mainText}>{data.date_of_birth}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  backIcon: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 15,
  },
  editIcon: {
    backgroundColor: Colors.editBackground,
    padding: 10,
    borderRadius: 15,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
    alignSelf: 'center',
  },
  imageContainer: {
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: Colors.profileBG,
    borderRadius: 30,
    marginBottom: '4%',
    marginHorizontal: '30%',
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  phone: {
    paddingTop: 5,
    textAlign: 'center',
    color: Colors.gray,
    fontWeight: '500',
    paddingBottom: 20,
  },
  subText: {
    color: Colors.gray,
    fontSize: 14,
    paddingLeft: '3%',
    paddingVertical: 5,
  },
  mainText: {
    paddingLeft: '3%',
    fontSize: 15,
    fontWeight: '600',
  },
  textArea: {
    backgroundColor: Colors.dullWhite,
    justifyContent: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: '5%',
    paddingHorizontal: 8,
    borderRadius: 30,
  },
});

export default Contact;
