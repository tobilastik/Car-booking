import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get ('window').width;
const HEIGHT = Dimensions.get ('window').height;

export const CurrentLocationButton = props => {
  const bottom = props.bottom ? props.bottom : 65;
  return (
    <View styles={[styles.container, {top: HEIGHT - bottom}]}>
      <MaterialIcons
        name="my-location"
        color="red"
        size={25}
        onPress={() => {}}
        //styles={styles.container}
      />

    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    zIndex: 9,
    position: 'absolute',
    flexDirection: 'row',
    width: WIDTH - 40,
    height: 60,
    top: 110,
    left: 20,
    borderRadius: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#0000',
  },
});
