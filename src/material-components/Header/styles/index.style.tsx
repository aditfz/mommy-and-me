import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  rootPaper: {
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  logo: {
    height: 90,
    marginBottom: 0,
  },
  name: {
    fontFamily: 'Sigmar One',
    color: '#FFC107',
    marginTop: -25,
    fontSize: 18,
    marginLeft: -17,
  },
  searchIcon: {
    color: 'white',
    height: 44,
    width: 44,
    backgroundColor: theme.palette.primary.light,
    padding: 10,
    borderRadius: '50%',
    margin: 'auto',
  },
  searchIconBox: {
    display: 'flex',
    border: `1px dashed ${theme.palette.primary.light}`,
    borderRadius: '50%',
    padding: 2,
    cursor: 'pointer',
  },

  menuIcon: {
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchBoxItem: {
    position: 'relative',
  },
}));

export default useStyles;
