import React, { useState, useEffect, useRef } from 'react';
import { Paper, Grid, Hidden } from '@material-ui/core';
import useStyles from './styles/index.style';
import Menu from './Menu';
import SearchIcon from '@material-ui/icons/SearchRounded';
import SearchBox from './Searchbox';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Mobiledrawer from './mobiledrawer';
const Logo = require('../../constants/images/logo.png');

const Header: React.FC = () => {
  const classes = useStyles();

  const [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const searchBoxHandler = () => {
    setSearchBoxIsOpen(!searchBoxIsOpen);
  };

  return (
    <Paper className={classes.rootPaper}>
      <Grid container justify='space-between' alignItems='center'>
        {drawerIsOpen && (
          <Paper>
            <SwipeableDrawer
              open={drawerIsOpen}
              onClose={() => {}}
              onOpen={() => {}}
            >
              <Mobiledrawer setDrawerIsOpen={setDrawerIsOpen} />
            </SwipeableDrawer>
          </Paper>
        )}
        <Grid item className={classes.menuIcon}>
          <MenuIcon
            onClick={() => {
              setDrawerIsOpen(true);
            }}
          />
        </Grid>
        <Grid item>
          <img className={classes.logo} src={Logo} alt='logo' />
          <h1 className={classes.name}>Mommy & Me</h1>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Menu />
          </Grid>
        </Hidden>
        <Grid item className={classes.searchBoxItem}>
          <div className={classes.searchIconBox} onClick={searchBoxHandler}>
            <SearchIcon className={classes.searchIcon} />
          </div>
          {searchBoxIsOpen && (
            <SearchBox setSearchBoxIsOpen={setSearchBoxIsOpen} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Header;
