import React from 'react';
import {TextInput as Input} from 'react-native';
import colors from 'res/colors';
import styles from './styles';

const TextInput = (props) => {
  return (
    <Input
      placeholderTextColor={colors.vigorPod}
      style={styles.container}
      {...props}
    />
  );
};

export default TextInput;
