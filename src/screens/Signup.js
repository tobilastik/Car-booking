import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import color from '../constants/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import {
  firstName,
  lastName,
  email,
  phoneNumber,
  linkedIn,
} from '../store/actions/register.action';

class Signup extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);
    this.state = {
      text: '',
      password: '',
      fontLoaded: false,
      passwordError: '',
      emailError: '',
      phoneError: '',
    };
  }
  saveToken = async (item, selectedValue) => {
    try {
      await AsyncStorage.setItem (item, selectedValue);
    } catch (error) {
      console.log ('Async error', error.message);
    }
  };

  componentDidMount = async () => {
    await Font.loadAsync ({
      PlayFair: require ('../assets/fonts/PlayfairDisplaySC-Regular.ttf'),
    });
    this.setState ({fontLoaded: true});
  };

  signUp = (email, password) => {
    this.setState ({
      passwordError: '',
      emailError: '',
      phoneError: '',
    });
    const {phoneNumber, linkedIn, register} = this.props;

    if (register.email != '') {
      if (this.validateEmail (register.email)) {
        if (register.phoneNumber != '') {
          if ((register.phoneNumber.length = 11)) {
            if (this.state.password != '') {
              if (
                this.state.password.length >= 6 &&
                this.state.password.length <= 16
              ) {
                this.signUpUsers (
                  this.props.register.email,
                  this.state.password
                );
              } else {
                this.setState ({
                  passwordError: 'Password length should be between 6 and 16 characters',
                });
              }
            } else {
              this.setState ({
                phoneError: 'Please enter a valid phone number',
              });
            }
          } else {
            this.setState ({passwordError: 'Password required!!!'});
          }
        } else {
          this.setState ({phoneError: 'Phone number is required!!!'});
        }
      } else {
        this.setState ({emailError: 'Please enter a valid email address!!!'});
      }
    } else {
      this.setState ({emailError: 'Email address is required!!!'});
    }
  };
  //Validate email with regex
  validateEmail (userEmail) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test (String (userEmail).toLowerCase ());
  }

  async signUpUsers (email, password) {
    try {
      firebase.auth ().createUserWithEmailAndPassword (email, password);
      firebase.auth ().onAuthStateChanged (user => {
        this.props.navigation.navigate ('Home');
      });
    } catch (error) {
      console.log (error.toString (error));
    }
  }

  render () {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      linkedIn,
      register,
    } = this.props;
    const {phoneError, emailError, passwordError} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {this.state.fontLoaded
          ? <Text
              style={{
                color: 'gray',
                fontWeight: 'normal',
                fontSize: 40,
                alignSelf: 'center',
                fontFamily: 'PlayFair',
              }}
            >
              Sign Up
            </Text>
          : null}
        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior="padding"
          enabled
        >

          <ScrollView style={{padding: 10}}>
            <TextInput
              mode="outlined"
              autoCorrect="false"
              autoCapitalize="none"
              ref="Email"
              keyboardType={'email-address'}
              style={{marginVertical: 12}}
              label="Email"
              value={register.email}
              onChangeText={mail => email (mail)}
              onSubmitEditing={event => {
                this.refs.LinkedIn.focus ();
              }}
              returnKeyType="next"
            />
            {emailError != ''
              ? <Text style={{color: 'red'}}> {emailError}</Text>
              : null}
            <TextInput
              mode="outlined"
              autoCorrect="false"
              secureTextEntry
              style={{marginVertical: 12}}
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState ({password})}
            />
            {passwordError != ''
              ? <Text style={{color: 'red'}}> {passwordError}</Text>
              : null}

            <TextInput
              mode="outlined"
              autoCorrect="false"
              keyboardType={'numbers-and-punctuation'}
              ref="phoneNumber"
              style={{marginVertical: 12}}
              label="Phone Number"
              value={register.phoneNumber}
              onChangeText={pnum => phoneNumber (pnum)}
              onSubmitEditing={event => {
                this.refs.Email.focus ();
              }}
              returnKeyType="next"
            />
            {phoneError != ''
              ? <Text style={{color: 'red'}}> {phoneError}</Text>
              : null}

            <TextInput
              mode="outlined"
              autoCorrect="false"
              ref="LinkedIn"
              style={{marginVertical: 12}}
              label="LinkedIn Username"
              value={register.linkedIn}
              onChangeText={link => linkedIn (link)}
              returnKeyType="done"
            />

            <TouchableOpacity
              onPress={() => this.signUp ()}
              underlayColor="transparent"
              style={styles.nextButton}
            >
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: color.white}}
              >
                Register
              </Text>

            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps (state) {
  return {
    register: state.register,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators (
    {
      firstName,
      lastName,
      email,
      phoneNumber,
      linkedIn,
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (Signup);
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f9f8f8',
    marginTop: StatusBar.currentHeight,
  },
  keyboard: {
    flex: 1,
  },
  nextButton: {
    backgroundColor: color.navyblue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 50,
    width: 80,
    borderRadius: 10,
  },
});
