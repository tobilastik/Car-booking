import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import color from '../constants/color';
import * as Font from 'expo-font';

export default class Login extends Component {
  state = {
    fontLoaded: false,
  };
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);
    this.state = {
      text: '',
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync ({
      PlayFair: require ('../assets/fonts/PlayfairDisplaySC-Regular.ttf'),
    });
    this.setState ({fontLoaded: true});
  };

  render () {
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
              keyboardType={'email-address'}
              style={{marginVertical: 12}}
              label="Email"
              value={this.state.text}
              onChangeText={text => this.setState ({text})}
            />

            <TextInput
              mode="outlined"
              secureTextEntry
              style={{marginVertical: 12}}
              label="Password"
              value={this.state.text}
              onChangeText={text => this.setState ({text})}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('Home')}
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
      </SafeAreaView>
    );
  }
}

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
