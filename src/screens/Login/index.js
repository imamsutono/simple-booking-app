import React from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import styles from './styles';

const Login = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor={colors.powerPod} />

    <Image source={images.gymPodder} style={styles.gymPodder} />

    <Text style={styles.title}>Hi Gym Podder!</Text>
    <Text style={styles.subtitle}>
      Your Private Gym Awaits! #JustGetStarted
    </Text>
    <View style={styles.divider} />

    <TextInput
      placeholder="Username"
      placeholderTextColor={colors.vigorPod}
      style={styles.textInput}
    />
    <TextInput
      placeholder="Password"
      placeholderTextColor={colors.vigorPod}
      style={styles.textInput}
    />
    <TouchableNativeFeedback>
      <View style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

export default Login;
