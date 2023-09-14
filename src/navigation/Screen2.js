import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Screen2({navigation}) {
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>Welcome to Screen 2!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen3')}
        style={styles.button}>
        <Text>Go to Screen 3</Text>
      </TouchableOpacity>
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
});
