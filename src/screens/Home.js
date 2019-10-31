import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import color from '../constants/color';

const {height, width} = Dimensions.get ('window');

class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeIndex: 0,
    };
  }
  componentWillMount () {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  segmentClicked = index => {
    this.setState ({
      activeIndex: index,
    });
  };

  renderHome = () => {
    if (this.state.activeIndex == 0) {
      return (
        <ScrollView contentContainerStyle={styles.updatePage}>
          <Text
            style={{
              color: color.faintBlue,
              marginTop: height / 3,
              fontSize: 30,
            }}
          >
            Updates
          </Text>

        </ScrollView>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <ScrollView contentContainerStyle={styles.updatePage}>
          <Text
            style={{
              color: color.faintBlue,
              marginTop: height / 3,
              fontSize: 30,
            }}
          >
            News
          </Text>
        </ScrollView>
      );
    }
  };
  render () {
    return (
      <View style={{flex: 1, marginTop: Platform.OS == 'android' ? 0 : null}}>
        <View>
          <View style={{alignItems: 'center', padding: 10, marginTop: 20}}>
            <Image
              source={require ('../assets/images/barcode.jpg')}
              style={{height: 200, width: 200, alignItems: 'center'}}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => this.segmentClicked (0)}
                active={this.state.activeIndex == 0}
                style={[
                  this.state.activeIndex == 0
                    ? {backgroundColor: color.navybluebutton}
                    : {backgroundColor: color.lightgreen},
                  {
                    height: 30,
                    width: width / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Text style={{color: color.white}}>Updates</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.segmentClicked (1)}
                active={this.state.activeIndex == 1}
                style={[
                  this.state.activeIndex == 1
                    ? {backgroundColor: color.navybluebutton}
                    : {backgroundColor: color.lightgreen},
                  {
                    height: 30,
                    width: width / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
              >
                <Text style={{color: color.white}}>News</Text>
              </TouchableOpacity>

            </View>
            <View>
              {this.renderHome ()}
            </View>
          </View>

        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create ({
  updatePage: {
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: color.inputgray,
    height: '100%',
  },
});
