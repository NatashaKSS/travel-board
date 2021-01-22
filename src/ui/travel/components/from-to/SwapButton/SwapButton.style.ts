import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    button: {
      height: '2.5rem',
      width: '2.5rem',
    },
  });
});

export { useStyles };
