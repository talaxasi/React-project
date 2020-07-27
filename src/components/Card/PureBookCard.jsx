import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonFavorites from "../ButtonFavorites/ButtonFavorites";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 250,
    maxWidth: 250,
    height: 400,
    margin: '10px 1%'
  },
  media: {
    height: 170,
  },
});

const PureBookCard = ({props}) => {
  const classes = useStyles();
  const {image, title, author, price, rating, id} = props.bookCard;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/books/${id}`}>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
        </Link>
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
      <ButtonFavorites props={props}/>
    </Card>
  );
}

export default PureBookCard;