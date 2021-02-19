import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Title = ({align, children, color}) => {
  return <Text style={styles.title}>{children}</Text>;
};

Title.propTypes = {
  align: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Title;
