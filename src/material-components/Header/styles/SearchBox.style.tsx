import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  rootPaper: {
    position: 'absolute',
    width: 250,
    right: 0,
    padding: 12,
    [theme.breakpoints.down('sm')]: {
      width: '83vw',
    },
  },
  searchTextField: {
    outline: 'none',
    border: 'none',
    flex: 1,
  },
  searchBoxTextFielBox: {
    padding: 12,
    borderRadius: 20,
    border: `2px dashed ${theme.palette.secondary.light}`,
  },
}));

export default useStyles;
