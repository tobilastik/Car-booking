import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get ('window').width;
const HEIGHT = Dimensions.get ('window').height;

export const CurrentLocationButton = props => {
  const bottom = props.bottom ? props.bottom : 65;
  return (
    <View styles={[styles.container, {top: 100}]}>
      <MaterialIcons
        name="my-location"
        color="red"
        size={25}
        onPress={() => {}}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    zIndex: 9,
    position: 'absolute',
    width: 45,
    height: 45,
    left: WIDTH - 70,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#0000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
