import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    paper: {
      padding: theme.spacing(1),
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  });
});

export { useStyles };
