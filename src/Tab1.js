import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

export default function Tab2() {
  return (
    <SafeAreaView>
      <Text style={styles.mainText}>Welcome Aboard!</Text>
      <Text style={styles.description}>
        Find the latest products in Menswear, Womenswear, Jewellery, and Electronics, cherrypicked to suit your taste and budget!
      </Text>
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
});
