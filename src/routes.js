import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
import CustomDrawer from './components/CustomDrawer';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Exames from './pages/Exames';

export default (isSigned = true) =>
  createAppContainer(
    createSwitchNavigator({
      SignIn: createSwitchNavigator({
        SignIn,
      }),
      App: createDrawerNavigator(
        {
          Dashboard: {
            screen: Dashboard,
            navigationOptions: {
              title: 'Dashboard',
              drawerIcon: ({ tintColor }) => (
                <Icon name="schedule" size={16} color={tintColor} />
              ),
            },
          },
          Exames: {
            screen: Exames,
            navigationOptions: {
              title: 'Exames',
              drawerIcon: ({ tintColor }) => (
                <Icon name="directions-car" size={16} color={tintColor} />
              ),
            },
          },
        },
        {
          contentComponent: CustomDrawer,
          drawerWidth: (Dimensions.get('window').width = 240),
          contentOptions: {
            activeTintColor: '#7159c1',
            activeBackgroundColor: 'rgba(212, 118, 207, 0.09)',
            itemsContainerStyle: {
              marginTop: 8,
              marginHorizontal: 5,
            },
            itemStyle: {
              borderRadius: 4,
            },
          },
        }
      ),
    }),
    { initialRouteName: isSigned ? 'App' : 'SignIn' }
  );
