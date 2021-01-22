import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      padding: 0,
      height: '100vh',
    },
  });
});

export { useStyles };
