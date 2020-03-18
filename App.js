import React from 'react';

import { AsyncStorage } from 'react-native';
import createRouter from './src/routes';

export default function App() {
  const signed = AsyncStorage.getItem('signed');

  const Routes = createRouter(signed);
  return (
    <>
      <Routes />
    </>
  );
}
