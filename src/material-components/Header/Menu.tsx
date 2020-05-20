import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './styles/Menu.style';
const menuText = ['Home', 'Blog', 'Shop', 'Pictures', 'About Us', 'Contact Us'];
export default function HeaderMenu() {
  const classes = useStyles();
  let menue = menuText.map((item) => {
    return (
      <Grid key={item}  className={classes.menuItem}>
        <Typography variant='button' className={classes.menuItemText}>
          {item}
        </Typography>
      </Grid>
    );
  });
  return <Grid container> {menue}</Grid>;
}
