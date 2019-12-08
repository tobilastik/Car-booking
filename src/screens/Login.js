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
import * as Font from 'expo-font';
import {email} from '../store/actions/register.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import firebase from '../config/firebase';
import Loader from '../components/Loader';
import {withNavigation} from 'react-navigation';

class Login extends Component {
  state = {
    fontLoaded: false,
    isLoading: false,
  };
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);
    this.state = {
      password: '',
      token: '',
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

  handleSignIn = (email, password) => {
    this.setState ({isLoading: true});
    try {
      firebase
        .auth ()
        .signInWithEmailAndPassword (email, password)
        .then (user => {
          if (user) {
            this.props.navigation.navigate ('Home');
            //console.log ('nananna', user);

            //this.saveToken ('id', user.uid);
          } else {
            console.log (error);
          }
        });
    } catch ({error}) {
      if (error) {
        alert ('error');
      }
      console.log (error.toString (error));
    }
  };

  render () {
    const {email, register} = this.props;
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
              Sign In
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
            />
            <TextInput
              mode="outlined"
              secureTextEntry
              style={{marginVertical: 12}}
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState ({password})}
            />
            {/* {this.state} */}

            <TouchableOpacity
              onPress={() =>
                this.handleSignIn (
                  this.props.register.email,
                  this.state.password
                )}
              underlayColor="transparent"
              style={styles.nextButton}
            >
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: color.white}}
              >
                Sign In
              </Text>

            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
        {this.state.isLoading ? <Loader /> : null}
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
      email,
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (Login);

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
    height: 50,
    width: '80%',
    borderRadius: 10,
    marginTop: 22,
    alignSelf: 'center',
  },
});
