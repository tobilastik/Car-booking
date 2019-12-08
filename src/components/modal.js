import React, {PureComponent} from 'react';

import {Dimensions, Modal, WebView, Share, Image} from 'react-native';

import {
  Header,
  Content,
  Container,
  Body,
  Left,
  Right,
  Title,
  Text,
  Button,
} from 'native-base';
import {Ionicons, FontAwesome} from '@expo/vector-icons';

const webViewHeight = Dimensions.get ('window').height - 56;

export default class ModalComponent extends PureComponent {
  constructor (props) {
    super (props);
    this._handleClose = this._handleClose.bind (this);
    this._handleShare = this._handleShare.bind (this);
  }

  _handleClose () {
    return this.props.onClose ();
  }

  _handleShare () {
    const {url, title} = this.props.articleData,
      message = `${title}\n\nRead more @\n${url}\n\nshared via The Pitchs App`;
    return Share.share (
      {title, message, url: message},
      {dialogTitle: `Share ${title}`}
    );
  }

  render () {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    if (url !== undefined) {
      return (
        <Modal
          onRequestClose={this._handleClose}
          visible={showModal}
          transparent
          animationType="slide"
        >
          <Container
            style={{margin: 16, marginBottom: 0, backgroundColor: '#ffffff'}}
          >
            <Header>
              <Left>
                <Button transparent onPress={this._handleClose}>
                  <Ionicons name="md-arrow-round-back" size={20} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} />
              </Body>
              <Right>
                <Button transparent onPress={this._handleShare}>
                  <FontAwesome name="share" size={20} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{height: webViewHeight}}>
              <WebView
                onError={this._handleClose}
                startInLoadingState
                scalesPageToFit
                source={{uri: url}}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
