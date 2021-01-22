import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '2rem',
      color: 'white',
      backgroundColor: '#5f9ea0',
      padding: theme.spacing(1, 4, 1, 4),
    },
    text: {
      fontSize: theme.typography.subtitle2.fontSize,
      lineHeight: '1.25rem',
    },
  });
});

export { useStyles };
