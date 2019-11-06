import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import color from '../constants/color';
import {MaterialIcons} from '@expo/vector-icons';
import {
  firstName,
  lastName,
  email,
  phoneNumber,
  linkedIn,
} from '../store/actions/register.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Font from 'expo-font';

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
    };
  }
  componentDidMount = async () => {
    await Font.loadAsync ({
      PlayFair: require ('../assets/fonts/PlayfairDisplaySC-Regular.ttf'),
    });
    this.setState ({fontLoaded: true});
  };

  render () {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      linkedIn,
      register,
    } = this.props;
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
              style={{marginVertical: 12}}
              label="First Name"
              value={register.firstName}
              onChangeText={fname => firstName (fname)}
              onSubmitEditing={event => {
                this.refs.lastName.focus ();
              }}
              returnKeyType="next"
            />

            <TextInput
              mode="outlined"
              autoCorrect="false"
              ref="lastName"
              style={{marginVertical: 12}}
              label="Last Name"
              value={register.lastName}
              onChangeText={lname => lastName (lname)}
              onSubmitEditing={event => {
                this.refs.phoneNumber.focus ();
              }}
              returnKeyType="next"
            />

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
                this.refs.Password.focus ();
              }}
              returnKeyType="next"
            />
            <TextInput
              mode="outlined"
              autoCorrect="false"
              ref="Password"
              secureTextEntry
              style={{marginVertical: 12}}
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState ({password})}
              onSubmitEditing={event => {
                this.refs.LinkedIn.focus ();
              }}
              returnKeyType="next"
            />
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
              underlayColor="transparent"
              style={styles.nextButton}
              onPress={() => this.props.navigation.navigate ('FinalSignup')}
            >
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: color.white}}
              >
                Next
              </Text>
              <MaterialIcons name="navigate-next" size={20} color="white" />
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
