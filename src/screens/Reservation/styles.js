import {StyleSheet} from 'react-native';
import colors from 'res/colors';
import {base, spacing} from 'res/layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.powerPod,
    flex: 1,
  },
  dateContainer: {
    backgroundColor: colors.cathay,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: spacing.m,
  },
  dateItem: {
    marginLeft: spacing.xl,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.container,
  },
  timeTextContainer: {
    flex: 1,
  },
  timeBoxContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  timeBox: {
    backgroundColor: colors.dynamicPod,
    borderRadius: base,
    flex: 1,
    height: 40,
    marginHorizontal: spacing.l,
  },
});

export default styles;
