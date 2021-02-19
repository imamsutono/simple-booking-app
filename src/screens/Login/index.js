import React, {useState} from 'react';
import {Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
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

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    navigation.dispatch(StackActions.replace('Home', {username}));
  };

  return (
    <Container>
      <Spacer size="xl" />
      <Image source={images.gymPodder} style={styles.gymPodder} />

      <Title>Hi Gym Podder!</Title>
      <Text align="center" color="gymPod">
        Your Private Gym Awaits! #JustGetStarted
      </Text>
      <Spacer size="xl" />

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Spacer />
      <Button label="LOGIN" onPress={submitLogin} />
    </Container>
  );
};

export default Login;
