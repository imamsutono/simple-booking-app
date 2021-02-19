import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {spacing} from 'res/layout';

const Spacer = ({size}) => (
  <View style={{height: spacing[size] || spacing.m}} />
);

Spacer.propTypes = {size: PropTypes.string};

export default Spacer;
