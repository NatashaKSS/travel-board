import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      padding: theme.spacing(4),
      borderRadius: 50,
    },
  });
});

export { useStyles };
