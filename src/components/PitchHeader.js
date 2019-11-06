import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Title} from 'native-base';
import {Button, Menu, Divider} from 'react-native-paper';
import {Feather} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

class PitchHeader extends Component {
  state = {
    moreButton: false,
  };

  _openMenu = () => this.setState ({moreButton: true});

  _closeMenu = () => this.setState ({moreButton: false});

  render () {
    return (
      <Header style={{backgroundColor: 'white'}} androidStatusBarColor="white">

        <Left>
          <Button transparent />
        </Left>
        <Body>
          <Title style={{color: 'black'}}>The Pitch App</Title>
        </Body>
        <Right style={this.state.moreButton ? styles.modalStyle : null}>
          <Menu
            visible={this.state.moreButton}
            onDismiss={this._closeMenu}
            anchor={
              <Button style={{marginHorizontal: -20}} onPress={this._openMenu}>
                <Feather
                  style={{}}
                  name="more-vertical"
                  color="black"
                  size={25}
                />
              </Button>
            }
          >

            <Menu.Item
              onPress={() => {
                this.props.navigation.navigate ('About');
              }}
              title="About Us"
            />
            <Menu.Item
              onPress={() => {
                this.props.navigation.navigate ('Conference');
              }}
              title="Our Conference "
            />
            <Menu.Item
              onPress={() => {
                this.props.navigation.navigate ('Thepitch');
              }}
              title="The Pitch"
            />
            <Menu.Item
              onPress={() => {
                this.props.navigation.navigate ('Faqs');
              }}
              title="FAQs"
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                this.props.navigation.navigate ('Howto');
              }}
              title="How to use the App"
            />

          </Menu>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create ({
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    backgroundColor: 'red',
  },
  modalStyle: {
    // marginLeft: width - 30,
    //top: -80,
  },
});

export default withNavigation (PitchHeader);
