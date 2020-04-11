import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, AsyncStorage } from 'react-native';

export default function Exit({ navigation }) {
  useEffect(() => {
    AsyncStorage.setItem('signed', false);
    AsyncStorage.removeItem('id');

    navigation.navigate('SignIn');
  }, [navigation]);
  return <View />;
}

Exit.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
