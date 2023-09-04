import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';

export default function Screen3({navigation}) {
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>Where it all began ... </Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Tab1')}
          style={styles.button}
          underlayColor={'#DDE6ED'}>
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('Tab2')}
          style={styles.button}
          underlayColor={'#DDE6ED'}>
          <Text>Shop</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    letterSpacing: 0.64,
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    letterSpacing: 0.64,
    textAlign: 'justify',
    padding: 15,
  },
  button: {
    paddingVertical: '3%',
    width: '50%',
    alignItems: 'center',
    marginHorizontal: '22%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
});
