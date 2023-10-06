import AddToFavorites from '../AddToFavorites/AddToFavorites';
import LinkButton from '../LinkButton/LinkButton';
import './MovieCard.css';

function MovieCard({id, img, title, rating, isAdded, onAddToFavorites}) {

    return (
        <div className="movie-card">
            <span className="movie-card__rating">{rating}</span>
            <img src={img} alt={title} className="movie-card__image" />
            <div className="movie-card__footer">
                <LinkButton url="#">{title}</LinkButton>
                <AddToFavorites id={id} isAdded={isAdded} onAdd={onAddToFavorites} />
            </div>
        </div>
    );
}

export default MovieCard;