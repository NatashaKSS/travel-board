import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    section: {
      height: '100%',
      padding: theme.spacing(4),
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
  });
});

export { useStyles };
