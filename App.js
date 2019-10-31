import React from 'react';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import Navigation from './src/navigation/RootNavigation';

// import all used images
const images = [];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isAuthenticationReady: false,
    isAuthenticated: false,
  };

  handleResourcesAsync = async () => {
    // I am caching all the images
    // for better performance on the app
    console.disableYellowBox = true;

    const cacheImages = images.map (image => {
      return Asset.fromModule (image).downloadAsync ();
    });

    return Promise.all (cacheImages);
  };

  render () {
    if (
      !this.state.isLoadingComplete &&
      !this.state.isAuthenticationReady &&
      !this.props.skipLoadingScreen
    ) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn (error)}
          onFinish={() => this.setState ({isLoadingComplete: true})}
        />
      );
    } else {
      return <Navigation />;
    }
  }
}
