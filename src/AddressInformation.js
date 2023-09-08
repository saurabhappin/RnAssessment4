import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {getContactDetails} from './ReduxHandler.js/Action';
import {BackIcon2, EditIcon} from '../assets/svgs';
import Colors from '../assets/colors';

export default function Address({navigation}) {
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
        <View style={styles.addressCard}>
          <Text style={styles.name}>
            {data.first_name + ' ' + data.last_name}
          </Text>
          <Text style={styles.subText}>
            Street Address:{' '}
            <Text style={styles.mainText}>{data.address.street_address}</Text>
          </Text>
          <Text style={styles.subText}>
            Street Name:{' '}
            <Text style={styles.mainText}>{data.address.street_name}</Text>
          </Text>

          <Text style={styles.subText}>
            City: <Text style={styles.mainText}>{data.address.city}</Text>
          </Text>

          <Text style={styles.subText}>
            State: <Text style={styles.mainText}>{data.address.state}</Text>
          </Text>

          <Text style={styles.subText}>
            PIN Code:{' '}
            <Text style={styles.mainText}>{data.address.zip_code}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  name: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 10,
  },
  subText: {
    color: Colors.gray,
    fontWeight: '500',
    paddingVertical: 5,
  },
  mainText: {
    color: Colors.black,
    fontWeight: '600',
  },
  addressCard: {
    backgroundColor: Colors.dullWhite,
    lineHeight: '20%',
    paddingVertical: 10,
    marginHorizontal: '5%',
    paddingHorizontal: '5%',
    borderRadius: 20,
    marginVertical: '5%',
  },
});
