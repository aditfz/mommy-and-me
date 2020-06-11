import React,{useState} from 'react'
import Course from './course';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const Paintsrc=require ('../../../constants/images/paint.png')
const PaintImagesrc=require ('../../../constants/images/paintImage.png')
const Musicsrc=require ('../../../constants/images/music.png')
const MusicImagesrc=require ('../../../constants/images/MusicImage.png')
const Swimmingsrc=require ('../../../constants/images/swimmer.png')
const SwimmingImagesrc=require ('../../../constants/images/swimmerImage.png')
const Yogasrc=require ('../../../constants/images/yoga.png')
const YogaImagesrc=require ('../../../constants/images/YogaImage.png')


const useStyles = makeStyles((theme) => ({
    tabPanel: {
      width: '100%',
      padding: 30,
      marginTop: 15,
      backgroundColor: '#1d2429',
      flexDirection: 'row',
      display: 'flex',
    },
    w: {
      width: 100,
      height: 5,
    },
    title: {
      textAlign: 'left',
    },
    description: {
      marginTop: 15,
      fontSize: 14,
      marginBottom: 15,
    },
    image: {
      width: '70%',
      borderRadius: 20,
      transition: '2s',
    },
    imageGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));
  const CourseDetailes = [
    {
      title: 'music',
      description: 'Music is good',
      image: MusicImagesrc,
      day: 'monday',
      hour: '10-12',
    },
    {
      title: 'Yoga',
      description: 'Yoga is good',
      image: YogaImagesrc,
      day: 'friday',
      hour: '10-12',
    },
    {
      title: 'Swimming',
      description: 'swimming is good',
      image: SwimmingImagesrc,
      day: 'wednesday',
      hour: '10-12',
    },
    {
      title: 'art',
      description: 'art is good',
      image: PaintImagesrc,
      day: 'thursday',
      hour: '10-12',
    },
  ];
  
export default function () {
    const classes = useStyles();
  
    const [page, setPage] = useState(0);
   
    const courseinf=[

       {
            image:Musicsrc,
            title:'Music',
            onClick:() => setPage(0),
            active:page === 0
        },{
            image:Yogasrc,
            title:'Yoga',
            onClick:() => setPage(1),
            active:page === 1
        },{
            image:Swimmingsrc,
            title:'Swimming',
            onClick:() => setPage(2),
            active:page === 2,
        },{
            image:Paintsrc,
            title:'Art',
            onClick:() => setPage(3),
            active:page === 3
        }
          ]
    
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              marginTop: '20',
              backgroundImage:
                'linear-gradient(to top, rgba(250,157,183, 0.5), rgba(255,255,255, 0.5)',
              borderRadius: 10,
            }}
          >
            Our Workshops
          </h2>
  
          <p>
            The Mommy And Me's mission is to provide affordable, high-quality
            early education.
          </p>
        </div>
        <Grid container direction='row' justify='center' alignItems='center'>
          {courseinf.map((aCourse=>{
            return <Course image={aCourse.image} title={aCourse.title} onClick={aCourse.onClick} key={aCourse.title} active={aCourse.active}/>
          }))}
         
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{
            width: '50%',
            margin: 'auto',
            transition: '1s',
            borderRadius: 20,
          }}
        >
          <Paper className={classes.tabPanel}>
            <Grid item sm={12} md={8} lg={6}>
              <div className={classes.title}>
                <h5>{CourseDetailes[page].title}</h5>
              </div>
              <div className={classes.description}>
                <p>{CourseDetailes[page].description}</p>
              </div>{' '}
            </Grid>
  
            <Grid item md={4} lg={6} className={classes.imageGrid}>
              <img
                src={CourseDetailes[page].image}
                alt={CourseDetailes[page].description}
                className={classes.image}
              />
            </Grid>
  
          </Paper>
        </Grid>
      </div>
    );
  }