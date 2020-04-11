import React from 'react';

import UserDataProvider from './src/context/UserData';

import { AsyncStorage } from 'react-native';
import createRouter from './src/routes';

export default function App() {
  const signed = AsyncStorage.getItem('signed');

  const Routes = createRouter(signed);
  return (
    <UserDataProvider>
      <Routes />
    </UserDataProvider>
  );
}
