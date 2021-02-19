import {StyleSheet} from 'react-native';
import colors from 'res/colors';
import {base, spacing} from 'res/layout';

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
  container: {
    backgroundColor: colors.powerPod,
    flex: 1,
    padding: spacing.container,
  },
  divider: {
    height: spacing.xl,
  },
  gymPodder: {
    alignSelf: 'center',
    marginTop: spacing.xl,
  },
  title: {
    color: colors.gymPod,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.gymPod,
    textAlign: 'center',
  },
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
