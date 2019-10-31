import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Forgot from '../screens/Forgot';
import Signup from '../screens/Signup';
import ResetPassword from '../screens/ResetPassword';
import Home from '../screens/Home';
import Notes from '../screens/Notes';
import Explore from '../screens/Explore';
import Network from '../screens/Network';
import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const DashboardBottom = createBottomTabNavigator (
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-home" color={tintColor} size={20} />
        ),
      },
    },
    Notes: {
      screen: Notes,
      navigationOptions: {
        tabBarLabel: 'Notes',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="sticky-note" color={tintColor} size={20} />
        ),
      },
    },
    Network: {
      screen: Network,
      navigationOptions: {
        tabBarLabel: 'Network',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="network" color={tintColor} size={20} />
        ),
      },
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        activeTintColor: '#00852d',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
            name="google-maps"
            color={tintColor}
            size={20}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#00852d',
    },
  }
);

const Auth = createStackNavigator (
  {
    Welcome: {screen: Welcome},
    Login: {screen: Login},
    Signup: {screen: Signup},
    Forgot: {screen: Forgot},
    ResetPassword: {screen: ResetPassword},
  },
  {
    initialRouteName: 'Welcome',
  }
);

const RootNavigation = createSwitchNavigator ({
  AuthLoading: AuthLoadingScreen,
  Auth,
  DashboardBottom,
});

export default createAppContainer (RootNavigation);
