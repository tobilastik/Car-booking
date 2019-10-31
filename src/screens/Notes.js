import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  FlatList,
  Platform,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import moment from 'moment';
import prompt from 'react-native-prompt-android';
import color from '../constants/color';

const height = Dimensions.get ('window').height;
export default class Notes extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      data: ['Note 1', 'Note 2', 'Note 3'],
      loading: false,
    };
    this.add = this.add.bind (this);
    this.remove = this.remove.bind (this);
    this.showForm = this.showForm.bind (this);
  }

  add = text => {
    let notEmpty = text.trim ().length > 0;

    if (notEmpty) {
      this.setState (prevState => {
        let {data} = prevState;
        return {
          data: data.concat (text),
          text: '',
        };
      });
    }
  };

  remove = i => {
    this.setState (prevState => {
      let data = prevState.data;

      data.splice (i, 1);

      return {data};
    });
  };

  // updateState =
  showForm = () => {
    if (Platform.OS == 'android') {
      prompt (
        'Enter Note',
        [
          {
            text: 'Cancel',
            onPress: () => console.log ('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: text => this.add (text)},
        ],
        {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
        }
      );
    } else {
      Alert.prompt ('Enter  Note', null, text => this.add (text));
    }
  };

  render () {
    return (
      <SafeAreaView>
        <View
          style={{
            backgroundColor: color.navyblue,
            marginTop: StatusBar.currentHeight,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 6,
          }}
          androidStatusBarColor="white"
        >
          <View>
            <Text style={styles.dateText}>
              {moment ().format ('MMMM D YYYY')}
            </Text>
          </View>
          <View>
            <Text style={styles.dateText}>{moment ().format ('dddd')}</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 5,
                  }}
                  key={index}
                  //style={{height: 50}}
                >
                  <Text>
                    {item}
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 5,
                      borderRadius: 5,
                      borderColor: '#32CD32',
                    }}
                    onPress={() => this.remove (index)}
                  >
                    <FontAwesome name="minus" size={10} color="#32CD32" />
                  </TouchableOpacity>

                </View>
              </View>
            )}
            keyExtractor={item => item.toString ()}
          />

        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#2b3a75',
              alignItems: 'center',
              position: 'absolute',
              right: 11,
              top: height / 2,
              justifyContent: 'center',
              padding: 20,
              borderRadius: 100,
            }}
            onPress={() => this.showForm ()}
          >
            <FontAwesome name="plus" color="white" size={20} />

          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  dateText: {
    color: color.white,
    fontSize: 16,
  },
});
