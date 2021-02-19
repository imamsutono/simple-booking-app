import React from 'react';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import {Button, Container, Spacer} from 'lib/components';
import images from 'res/images';
import styles from './styles';

const Home = () => (
  <Container>
    <TouchableNativeFeedback onPress={() => {}}>
      <View style={styles.container}>
        <Image source={images.gymPod} style={styles.cover} />
        <View style={styles.content}>
          <Text style={styles.title}>The Dungeon</Text>
          <Text style={styles.subtitle}>
            80 Bendemeer Road, #01-10, Singapore, 339949{'\n'}4 minutes from
            Boon Keng MRT{'\n'}7 minutes from Bendemeer MRT{'\n'}
            Enter via the open carpark behind the main building{'\n'}
            PER PAX (or pod) PER HOUR basis.
          </Text>

          <Spacer />
          <View style={styles.row}>
            <Text style={[styles.price]}>$9.5</Text>
            <View style={styles.flex}>
              <Button label="BOOK" />
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  </Container>
);

export default Home;
