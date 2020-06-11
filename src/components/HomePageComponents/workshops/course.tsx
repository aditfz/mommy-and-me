import React from 'react';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 150,
    height: 150,
    border: '1px dashed #f500aa',
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: '.4s',
    '&:hover': {
      transition: '.4s',
      color: '#ffffff',
      backgroundColor: '#f500aa',
    },
  },
  activeRoot: {
    color: 'white',
    width: 150,
    height: 150,
    border: 'none',
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#f500aa',
  },
  image: {
    width: 100,
    height: 100,
  },
}));

interface courseProps{
    active:boolean;
    image:string;
    title:string;
    onClick:()=>void
}
export default function ({ active, image, title, onClick }:courseProps) {
  const classes = useStyles();


  return (
    <div
      className={active ? classes.activeRoot : classes.root}
      onClick={onClick}
    >
      <img className={classes.image} src={image} alt={title} />
      <div >{title}</div>
    </div>
  );
}
