import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMc from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIo from 'react-native-vector-icons/Ionicons';

import { Dimensions } from 'react-native';

import CustomDrawer from './components/CustomDrawer';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Exames from './pages/Exames';
import Matricula from './pages/Matricula';
import Sobre from './pages/Sobre';
import Exit from './components/Exit';

// Paginas do instrutor
import AgendaInstrutor from './pages/AgendaInstrutor';

export default signed =>
  createAppContainer(
    createSwitchNavigator({
      SignIn: createSwitchNavigator({
        SignIn,
      }),
      AppInstrutor: createDrawerNavigator(
        {
          AgendaInstrutor: {
            screen: AgendaInstrutor,
            navigationOptions: {
              title: 'Agenda',
              drawerIcon: ({ tintColor }) => (
                <Icon name="schedule" size={18} color={tintColor} />
              ),
            },
          },
          Sair: {
            screen: Exit,
            navigationOptions: {
              title: 'Sair',
              drawerIcon: ({ tintColor }) => (
                <Icon name="exit-to-app" size={20} color={tintColor} />
              ),
            },
          },
        },
        {
          contentComponent: CustomDrawer,
          drawerWidth: (Dimensions.get('window').width = 305),
          contentOptions: {
            activeTintColor: '#05c148',
            activeBackgroundColor: 'rgba(5,193,72, 0.09)',
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
      App: createDrawerNavigator(
        {
          Dashboard: {
            screen: Dashboard,
            navigationOptions: {
              title: 'Dashboard',
              drawerIcon: ({ tintColor }) => (
                <Icon name="schedule" size={18} color={tintColor} />
              ),
            },
          },
          Exames: {
            screen: Exames,
            navigationOptions: {
              title: 'Exames',
              drawerIcon: ({ tintColor }) => (
                <Icon name="directions-car" size={18} color={tintColor} />
              ),
            },
          },
          Matrícula: {
            screen: Matricula,
            navigationOptions: {
              title: 'Matricula',
              drawerIcon: ({ tintColor }) => (
                <IconMc name="account-outline" size={20} color={tintColor} />
              ),
            },
          },
          Sobre: {
            screen: Sobre,
            navigationOptions: {
              title: 'Sobre',
              drawerIcon: ({ tintColor }) => (
                <IconIo
                  name="md-information-circle-outline"
                  size={20}
                  color={tintColor}
                />
              ),
            },
          },
          Sair: {
            screen: Exit,
            navigationOptions: {
              title: 'Sair',
              drawerIcon: ({ tintColor }) => (
                <Icon name="exit-to-app" size={20} color={tintColor} />
              ),
            },
          },
        },
        {
          contentComponent: CustomDrawer,
          drawerWidth: (Dimensions.get('window').width = 305),
          contentOptions: {
            activeTintColor: '#05c148',
            activeBackgroundColor: 'rgba(5,193,72, 0.09)',
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
    { initialRouteName: signed ? 'App' : 'SignIn' }
  );
