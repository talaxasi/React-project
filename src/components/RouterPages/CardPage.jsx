import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 250,
    maxWidth: 250,
    margin: '10px 1%',
    paddingBottom: '1%'
  },
  media: {
    height: 170,
  },
});

const CardPage = (props) => {
  const classes = useStyles();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/books/${+props.match.params.id}`)
    .then(response => response.json())
    .then(data => setItem({book: data}))
  }, [])

if (!item.book) return 'Loading...';

const {image, title, author, price, rating} = item.book;

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
      <Link to={'/'}>
      <button>К списку книг</button>
      </Link>
    </Card>
  );
}

export default CardPage;