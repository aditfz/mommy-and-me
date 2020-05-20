import React, { useState } from 'react';
import { Paper, Grid, Hidden } from '@material-ui/core';
import useStyles from './styles/index.style';
import Menu from './Menu';
import SearchIcon from '@material-ui/icons/SearchRounded';
import SearchBox from './Searchbox';

export default function Header() {
  const classes = useStyles();

  const [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);

  return (
    <Paper className={classes.rootPaper}>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item>
          <img
            className={classes.logo}
            src='https://www.graphicsprings.com/filestorage/stencils/9ea51687148f4cfb53737a025d94caaa.png?width=500&height=500'
            alt='logo'
          />
          <h1 style={{ fontFamily: 'Sigmar One', color: '#f00', margin: '0' }}>
            Mommy & Me
          </h1>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Menu />
          </Grid>
        </Hidden>
        <Grid item className={classes.searchBoxItem}>
          <div
            className={classes.searchIconBox}
            onClick={() => setSearchBoxIsOpen(!searchBoxIsOpen)}
          >
            <SearchIcon className={classes.searchIcon} />
          </div>
          {searchBoxIsOpen && (
            <SearchBox setSearchBoxIsOpen={setSearchBoxIsOpen} />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
