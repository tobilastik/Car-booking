import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import RadioButton from '../components/RadioButton';
import color from '../constants/color';
import {
  club,
  department,
  school,
  affiliation,
  participant,
} from '../store/actions/register.action';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const options = [
  {
    key: 'yes',
    text: 'Yes',
  },
  {
    key: 'no',
    text: 'No',
  },
];

class FinalSignup extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super (props);
    this.state = {
      text: '',
      pitch: 'yes',
    };
  }
  render () {
    const {
      club,
      department,
      school,
      affiliation,
      participant,
      register,
    } = this.props;
    return (
      <SafeAreaView style={styles.container}>

        <Text
          style={{
            color: 'gray',
            fontWeight: 'normal',
            fontSize: 30,
            alignSelf: 'center',
          }}
        >
          Sign Up
        </Text>

        <KeyboardAvoidingView
          style={styles.keyboard}
          behavior="padding"
          enabled
        >
          <ScrollView style={{padding: 10}}>
            <TextInput
              style={{marginVertical: 12}}
              label="Affiliation"
              value={register.affiliation}
              onChangeText={text => affiliation (text)}
              onSubmitEditing={event => {
                this.refs.School.focus ();
              }}
              returnKeyType="next"
            />

            <TextInput
              style={{marginVertical: 12}}
              label="School"
              value={register.school}
              onChangeText={text => school (text)}
              onSubmitEditing={event => {
                this.refs.Club.focus ();
              }}
              returnKeyType="next"
            />

            <TextInput
              style={{marginVertical: 12}}
              label="Club"
              ref="Club"
              value={register.club}
              onChangeText={text => club (text)}
              onSubmitEditing={event => {
                this.refs.Department.focus ();
              }}
              returnKeyType="next"
            />
            <TextInput
              ref="Department"
              style={{marginVertical: 12}}
              label="Department"
              value={register.department}
              onChangeText={text => department (text)}
              returnKeyType="done"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
              }}
            >
              <Text style={{fontSize: 16, color: 'gray', fontWeight: 'bold'}}>
                The Pitch Participant?
              </Text>
              <RadioButton
                //value={loan.indebtedness}
                options={options}
                pitch={register.participant}
                handleRadioChange={pitch => {
                  participant (pitch);
                }}
              />

            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('Home')}
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
      club,
      department,
      school,
      affiliation,
      participant,
    },
    dispatch
  );
}

export default connect (mapStateToProps, mapDispatchToProps) (FinalSignup);

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
