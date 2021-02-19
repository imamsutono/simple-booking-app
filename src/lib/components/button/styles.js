import {StyleSheet} from 'react-native';
import {spacing} from 'res/layout';
import colors from 'res/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.gymPod,
    borderRadius: spacing.xl,
    width: '100%',
    padding: spacing.m,
  },
  buttonText: {
    color: colors.energyPod,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
