import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from 'react-router-dom';
const Logo = require('../../constants/images/logo.png');
const useStyles = makeStyles((theme) => ({
  list: {
    //   width: '100vw',
    //   maxWidth: 400,
    minHeight: 'fit-content',
    height: '100vh',
    width: 400,
    backgroundColor: '#2f2f2f',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  fullList: {
    width: 'auto',
  },
  activeItem: {
    backgroundColor: 'black',
    color: 'white',
    borderRight: '2px solid red',
  },
}));
interface MobiledrawerProps {
  setDrawerIsOpen: (drawerIsOpen: boolean) => void;
}
const Mobiledrawer: React.FC<MobiledrawerProps> = ({ setDrawerIsOpen }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const classes = useStyles();
  useEffect(() => {
    const myFunction = (event: MouseEvent) => {
      if (!drawerRef.current!.contains(event.target as Node)) {
        setDrawerIsOpen(false);
      }
    };
    document.addEventListener('mousedown', myFunction);
    return () => {
      document.removeEventListener('mousedown', myFunction);
    };
  }, [drawerRef]);

  return (
    <div
      ref={drawerRef}
      className={classes.list}
      role='presentation'
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={Logo} alt='Logo' style={{ width: '60%' }} />
      <Divider />
      <List>
        {[
          'All mail',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'Spam',
          'Trash',
          'ttttttttt',
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            component={NavLink}
            to={text}
            activeClassName={classes.activeItem}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Mobiledrawer;
