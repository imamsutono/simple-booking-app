import React from 'react';
import {Image} from 'react-native';
import {
  Button,
  Container,
  Spacer,
  Text,
  TextInput,
  Title,
} from 'lib/components';
import images from 'res/images';
import styles from './styles';

const Login = () => (
  <Container>
    <Spacer size="xl" />
    <Image source={images.gymPodder} style={styles.gymPodder} />

    <Title>Hi Gym Podder!</Title>
    <Text align="center" color="gymPod">
      Your Private Gym Awaits! #JustGetStarted
    </Text>
    <Spacer size="xl" />

    <TextInput placeholder="Username" />
    <TextInput placeholder="Password" secureTextEntry />
    <Spacer />
    <Button label="LOGIN" />
  </Container>
);

export default Login;
