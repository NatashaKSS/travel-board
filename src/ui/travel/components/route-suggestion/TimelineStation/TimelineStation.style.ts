import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    stationName: {
      fontWeight: 'bold',
    },
    description: {
      color: theme.palette.grey[600],
      fontSize: theme.typography.subtitle2.fontSize,
    },
  });
});

export { useStyles };
