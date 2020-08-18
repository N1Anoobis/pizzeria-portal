import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 645,
  },
  media: {
    height:440,
  },
});

export default function Homepage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={NavLink} to={`${process.env.PUBLIC_URL}/login`}>
        <CardMedia
          component="img"
          alt="welcome"
          height="440"
          image={require('./res.jpg')}
          title="welcome"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            work hard make your boss rich
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
