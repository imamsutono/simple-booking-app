import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({label}) => (
  <TouchableNativeFeedback>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  </TouchableNativeFeedback>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
