import {StyleSheet} from 'react-native';
import {base, spacing} from 'res/layout';
import colors from 'res/colors';

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.m,
  },
  content: {
    backgroundColor: colors.energyPod,
    borderBottomStartRadius: base,
    borderBottomEndRadius: base,
    padding: spacing.m,
  },
  cover: {
    borderTopLeftRadius: base,
    borderTopRightRadius: base,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  price: {
    color: colors.gymPod,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  subtitle: {
    color: colors.changiCity,
  },
  title: {
    color: colors.dungeon,
    fontSize: 20,
  },
});

export default styles;
