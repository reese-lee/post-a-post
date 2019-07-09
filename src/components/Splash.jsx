import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    height: 600,
    padding: 50,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
  },
  fonts:{
    color: 'white',
    fontSize: '5em',
    opacity: 0.85,
  }

});

export default function Splash() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.image}>
        <div className={classes.centered}>
          <p className={classes.fonts} style={{fontFamily: 'Cinzel Decorative'}}>Gigi's Man</p>
        </div>
      </div>
    </div>
  );
}
