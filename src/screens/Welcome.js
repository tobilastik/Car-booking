import React, {Component} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import color from '../constants/color';
import {AntDesign} from '@expo/vector-icons';

const height = Dimensions.get ('window').height;

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  render () {
    return (
      <View style={{flex: 1}}>

        <View style={styles.slide1}>
          <ImageBackground
            source={require ('../assets/images/welcome.jpg')}
            style={{height: '100%', width: '100%'}}
          >
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: 20,
                alignItems: 'center',
                height: '100%',
              }}
            >
              <View style={styles.logo}>
                <AntDesign name="apple1" size={60} color={color.navyblue} />
              </View>
              <View style={{alignItems: 'center', top: height / 4}}>
                <Text style={styles.text}>THE PITCH</Text>
                <Text
                  style={{
                    marginTop: 42,
                    color: 'white',
                    alignSelf: 'center',
                    textAlign: 'center',
                    fontSize: 18,
                  }}
                >
                  Welcome to The Pitch onboarding app.
                </Text>
              </View>
              <View style={{position: 'absolute', top: height - 150}}>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate ('Login')}
                  underlayColor="transparent"
                  style={styles.signinButton}
                >
                  <Text style={{fontSize: 17, color: color.white}}>
                    Sign In
                  </Text>
                </TouchableHighlight>

                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate ('Signup')}
                  underlayColor="transparent"
                  style={styles.signinButton}
                >
                  <Text style={{fontSize: 17, color: color.white}}>
                    Sign Up
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  signinButton: {
    height: 50,
    width: 250,
    borderColor: 'white',
    borderRadius: 40,
    borderWidth: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
  },
  logo: {
    height: 100,
    width: 100,
    top: 30,
    borderRadius: 50,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
