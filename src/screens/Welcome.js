import React, {Component} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';
import color from '../constants/color';
import * as Font from 'expo-font';

const height = Dimensions.get ('window').height;

export default class Welcome extends Component {
  state = {
    fontLoaded: false,
  };
  static navigationOptions = {
    header: null,
  };

  componentDidMount = async () => {
    await Font.loadAsync ({
      DancingScript: require ('../assets/fonts/DancingScript-Regular.ttf'),
      Fredrick: require ('../assets/fonts/FrederickatheGreat-Regular.ttf'),
    });
    this.setState ({fontLoaded: true});
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
                <Image
                  source={require ('../assets/images/logo.png')}
                  style={{height: 100, width: 100, borderRadius: 10}}
                />
              </View>
              <View style={{alignItems: 'center', top: height / 4}}>
                {this.state.fontLoaded
                  ? <Text style={styles.text}>THE PITCH</Text>
                  : null}
                {this.state.fontLoaded
                  ? <Text
                      style={{
                        marginTop: 42,
                        color: 'white',
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 26,
                        fontFamily: 'DancingScript',
                      }}
                    >
                      Welcome to the pitch onboarding app.
                    </Text>
                  : null}
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
    fontSize: 30,
    fontFamily: 'Fredrick',
    alignSelf: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
