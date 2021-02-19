import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'res/colors';

const Text = ({align, children, color}) => {
  return (
    <RNText
      style={{textAlign: align || 'auto', color: colors[color] || 'black'}}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  align: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Text;
