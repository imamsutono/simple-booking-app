import React from 'react';
import {StatusBar, View} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'res/colors';
import styles from './styles';

const Container = ({children}) => (
  <View style={styles.container}>
    <StatusBar backgroundColor={colors.powerPod} />
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Container;
