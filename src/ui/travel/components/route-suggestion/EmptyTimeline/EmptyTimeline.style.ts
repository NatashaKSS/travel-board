import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    imageSection: {
      marginBottom: theme.spacing(4),
    },
    image: {
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: theme.typography.h5.fontSize,
      marginBottom: theme.spacing(2),
    },
    description: {
      fontWeight: 'lighter',
      fontSize: theme.typography.subtitle1.fontSize,
    },
  });
});

export { useStyles };
