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
import FinalSignup from '../screens/FinalSignup';
import About from '../screens/About';
import Conference from '../screens/Conference';
import Thepitch from '../screens/Thepitch';
import Faqs from '../screens/Faqs';
import Howto from '../screens/Howto';

const MoreScreen = createStackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        header: null,
      };
    },
  },
  About: {screen: About},
  Conference: {screen: Conference},
  Thepitch: {screen: Thepitch},
  Faqs: {screen: Faqs},
  Howto: {screen: Howto},
});

const DashboardBottom = createBottomTabNavigator (
  {
    Home: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        activeTintColor: '#2b3a75',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name="ios-home" color={tintColor} size={20} />
        ),
      },
    },
    Notes: {
      screen: Notes,
      navigationOptions: {
        tabBarLabel: 'Notes',
        activeTintColor: '#2b3a75',
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="sticky-note" color={tintColor} size={20} />
        ),
      },
    },
    Network: {
      screen: Network,
      navigationOptions: {
        tabBarLabel: 'Network',
        activeTintColor: '#2b3a75',
        tabBarIcon: ({tintColor}) => (
          <Entypo name="network" color={tintColor} size={20} />
        ),
      },
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'Explore',
        activeTintColor: '#2b3a75',
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
      activeTintColor: '#2b3a75',
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
    FinalSignup: {screen: FinalSignup},
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
