import AddToFavorites from '../AddToFavorites/AddToFavorites';
import LinkButton from '../LinkButton/LinkButton';
import styles from './MovieCard.module.css';

function MovieCard({id, img, title, rating, isAdded, onAddToFavorites}) {

    return (
        <div className={styles['movie-card']}>
            <span className={styles.rating}>{rating}</span>
            <img src={img} alt={title} className={styles.image} />
            <div className={styles.footer}>
                <LinkButton url="#">{title}</LinkButton>
                <AddToFavorites id={id} isAdded={isAdded} onAdd={onAddToFavorites} />
            </div>
        </div>
    );
}

export default MovieCard;