import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    maxWidth: 250,
    height: 350,
    margin: '10px 1%'
  },
  media: {
    height: 170,
  },
});

const BookCard = ({author, image, price, title, rating}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          Цена: {price}
        </Typography>
        <Typography>
          Рейтинг: {rating}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default BookCard