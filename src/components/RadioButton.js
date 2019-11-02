import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import color from '../constants/color';

export default class RadioButtons extends Component {
  state = {
    value: null,
  };

  render () {
    const {options, handleRadioChange, pitch} = this.props;
    const {value} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        {options.map (item => {
          return (
            <View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => handleRadioChange (item.key)}
              >
                {pitch === item.key && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text> {item.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 30,
  },

  circle: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: color.navyblue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: color.navyblue,
  },
});
