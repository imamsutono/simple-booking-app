import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'lib/components';
import styles from './styles';

const Reservation = () => {
  const [timeBooked, setTimeBooked] = useState(false);
  const [pax, setPax] = useState(1);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.dateItem}>
          <Text align="center" color="dungeon">
            Thu
          </Text>
          <Text align="center" color="dungeon">
            18 Feb
          </Text>
        </View>
        <View style={styles.dateItem}>
          <Text align="center" color="dungeon">
            Fri
          </Text>
          <Text align="center" color="dungeon">
            19 Feb
          </Text>
        </View>
        <View style={styles.dateItem}>
          <Text align="center" color="dungeon">
            Sat
          </Text>
          <Text align="center" color="dungeon">
            20 Feb
          </Text>
        </View>
      </View>

      <View style={styles.timeContainer}>
        <View style={styles.timeTextContainer}>
          <Text color="dungeon">12:00 AM</Text>
        </View>

        <View style={styles.timeBoxContainer}>
          <View style={styles.timeBox} />
          <View style={styles.timeBox} />
          <View style={styles.timeBox} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Reservation;
