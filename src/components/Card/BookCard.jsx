import React from "react";
import {connect} from "react-redux";
import {setFavoriteBook, deleteFavoriteBook} from "../../store/favorites/favoritesActions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ButtonFavorites from "../ButtonFavorites/ButtonFavorites";
import './BookCard.scss';

const BookCard = (props) => {
  const {image, title, author, price, rating, id} = props.bookCard;

  return (
    <Card className={"bookCard"}>
      <CardActionArea>
        <Link to={`/${id}`}>
          <CardMedia
            className={"cardMedia"}
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

const mapStateToProps = state => ({
  favoriteBooks: state.favorites
})

const mapDispatchToProps = dispatch => ({
  setFavoriteBook: book => {
    dispatch(setFavoriteBook(book))
  },
  deleteFavoriteBook: book => {
    dispatch(deleteFavoriteBook(book))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);