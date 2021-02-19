import React from 'react';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import images from 'res/images';
import Button from '../button';
import Spacer from '../spacer';
import styles from './styles';

const Card = ({
  buttonLabel,
  buttonOnPress,
  cover,
  footerTitle,
  onPress,
  subtitle,
  title,
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image source={images[cover]} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <Spacer />
        <View style={styles.footer}>
          <Text style={[styles.footerTitle]}>{footerTitle}</Text>
          <View style={styles.flex}>
            <Button label={buttonLabel} onPress={buttonOnPress} />
          </View>
        </View>
      </View>
    </View>
  </TouchableNativeFeedback>
);

Card.propTypes = {
  buttonLabel: PropTypes.string,
  buttonOnPress: PropTypes.func,
  cover: PropTypes.string.isRequired,
  footerTitle: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Card;
