/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  RefreshControl,
} from 'react-native';
import {
  CarFront,
  CarBack,
  UserIcon,
  EmailIcon,
  PasswordIcon,
  HidePassword,
  ShowPassword,
  CheckedBox,
  UncheckedBox,
  FacebookIcon,
  GoogleIcon,
  TwitterIcon,
  BackIcon,
  BellSVG,
  ArrowSVG,
  CartSVG,
} from '../../assets/svgs';
import Colors from '../../assets/colors';

const Tab3 = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onPull = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 800);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onPull} />
        }>
        <NavBar />
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const NavBar = () => {
  return (
    <View style={styles.mainNavBar}>
      <ArrowSVG style={{paddingRight: 31, paddingLeft: 17}} />
      <Text style={styles.navBarHeading}>Create Account</Text>
      <View style={styles.navBarHeader}>
        <View style={{marginRight: 17}}>
          <BellSVG />
        </View>
        <CartSVG />
      </View>
    </View>
  );
};

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [secureEntry1, setSecureEntry1] = useState(false);
  const [secureEntry2, setSecureEntry2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNameValue, setNameValue] = useState('');
  const [isEmailValue, setEmailValue] = useState('');
  const [isPasswordValue, setPasswordValue] = useState('');
  const [isConfirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function handlePress() {
    if (
      !isNameValue ||
      !isEmailValue ||
      !isPasswordValue ||
      !isConfirmPassword
    ) {
      Alert.alert('Please fill all fields!');
    } else if (!isChecked) {
      Alert.alert('Please accpet the \n Terms & Conditions');
    } else if (!emailValid) {
      Alert.alert('Please enter a valid email!');
    } else if (!passwordValid) {
      Alert.alert(
        '\b\bPassword must contain: \n-At least an Uppercase Alphabet \n-At least one Numerical Value \n-At least one Special Character \n-Should be at least 8 characters long.',
      );
    } else if (!passwordMatch) {
      Alert.alert('Passwords do not match!');
    } else {
      setModalVisible(!modalVisible);
    }
  }
  return (
    <View style={styles.cardMain}>
      <ScrollView>
        <Text style={styles.cardHeading}>SignUp</Text>
        <Text style={styles.cardSubHeading}>Gear up and start wishlisting</Text>
        <View style={styles.inputView}>
          <UserIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="First Name"
            onChangeText={value => setNameValue(value)}
          />
        </View>
        <View style={styles.inputView}>
          <EmailIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={value => {
              setEmailValue(value);
              setEmailValid(value.match(emailRegex));
            }}
          />
        </View>
        <View style={styles.inputView}>
          <PasswordIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Password"
            onChangeText={value => {
              setPasswordValue(value);
              setPasswordValid(value.match(passwordRegex));
            }}
            secureTextEntry={!secureEntry1}
          />
          <TouchableOpacity
            onPress={() => setSecureEntry1(!secureEntry1)}
            activeOpacity={1}>
            {secureEntry1 && <ShowPassword />}
            {!secureEntry1 && <HidePassword />}
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <PasswordIcon />
          <TextInput
            style={styles.inputBox}
            placeholder="Confirm Password"
            onChangeText={value => {
              setPasswordMatch(false);
              setConfirmPassword(value);
              if (isPasswordValue && value === passwordValid[0]) {
                setPasswordMatch(true);
              }
            }}
            secureTextEntry={!secureEntry2}
          />
          <TouchableOpacity
            onPress={() => setSecureEntry2(!secureEntry2)}
            activeOpacity={1}>
            {secureEntry2 && <ShowPassword />}
            {!secureEntry2 && <HidePassword />}
          </TouchableOpacity>
        </View>
        <View style={styles.disclaimerContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            activeOpacity={1}>
            {isChecked && <CheckedBox />}
            {!isChecked && <UncheckedBox />}
          </TouchableOpacity>
          <Text style={styles.disclaimer}>
            I Agree to the Terms and Conditions,{'\n'}
            Privacy Policy & Medical Disclaimer
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePress}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.dialogBoxContainer}>
            <View style={styles.dialogBox}>
              {isNameValue &&
                isEmailValue &&
                isPasswordValue &&
                isConfirmPassword &&
                isChecked &&
                emailValid &&
                passwordValid &&
                passwordMatch && (
                  <>
                    <Text style={styles.modalHeading}>Sign Up Successful</Text>
                    <Text style={styles.modalText}>
                      Welcome {isNameValue}! {'\n'}({isEmailValue})
                    </Text>
                  </>
                )}
              <TouchableOpacity
                style={styles.dialogBoxButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <BackIcon />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.separator} />
        <Text
          style={{
            color: Colors.font,
            fontSize: 14,
            fontWeight: '500',
            textAlign: 'center',
            paddingVertical: 8,
          }}>
          OR
        </Text>
        <View style={styles.socials}>
          <FacebookIcon />
          <GoogleIcon />
          <TwitterIcon />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.navBackground,
  },
  mainNavBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  navBarHeading: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 20,
  },
  navBarHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 16,
    alignItems: 'center',
  },
  carBack: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -80,
    marginRight: -20,
  },
  carFront: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -120,
    marginRight: 24,
  },
  cardMain: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: Colors.cardBackground,
    borderRadius: 25,
  },
  cardHeading: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '800',
    paddingTop: 19,
    color: Colors.font,
  },
  cardSubHeading: {
    color: Colors.font,
    textAlign: 'center',
    paddingVertical: 10,
    letterSpacing: 0.64,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.font,
    marginVertical: 15,
    marginHorizontal: 40,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#777',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputBox: {
    marginVertical: 5,
    paddingLeft: 20,
    paddingRight: 5,
    height: 40,
    width: '80%',
  },
  disclaimerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disclaimer: {
    color: Colors.font,
    textAlign: 'center',
    fontWeight: '400',
    paddingLeft: 5,
    lineHeight: 20,
  },
  button: {
    backgroundColor: Colors.font,
    borderRadius: 25,
    marginHorizontal: 85,
    paddingVertical: 12,
    borderColor: Colors.buttonText,
    borderWidth: 1,
    marginVertical: 29,
  },
  buttonText: {
    color: Colors.buttonText,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  separator: {
    backgroundColor: Colors.font,
    height: 1.5,
    marginHorizontal: 45,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '5%',
    paddingBottom: '15%',
  },
  dialogBoxContainer: {
    flex: 1,
    backgroundColor: 'rgba(3,3,3,0.5)',
  },
  dialogBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.font,
    borderRadius: 15,
    marginHorizontal: '10%',
    marginVertical: '70%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dialogBoxButton: {
    borderRadius: 25,
    margin: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeading: {
    paddingTop: 20,
    fontSize: 26,
    fontWeight: '600',
    letterSpacing: 1,
  },
  modalText: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default Tab3;
