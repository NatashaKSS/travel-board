import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      padding: theme.spacing(4, 4, 4, 2),
      borderRadius: 16,
    },
  });
});

export { useStyles };
