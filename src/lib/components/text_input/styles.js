import {StyleSheet} from 'react-native';
import colors from 'res/colors';
import {base, spacing} from 'res/layout';

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.gymPodLight,
    borderColor: colors.gymPod,
    borderWidth: 1,
    borderRadius: base,
    color: colors.gymPod,
    marginBottom: spacing.m,
    paddingLeft: spacing.m,
  },
});

export default styles;
