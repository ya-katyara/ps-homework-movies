import cn from 'classnames';
import styles from './AddToFavorites.module.css';

function AddToFavorites({ id, isAdded, onAdd }) {
    const onClick = () => {
        onAdd?.(id);
    };

    return (
        <span
            className={cn(styles['add-to-favorites-btn'], {
                [styles.added]: isAdded
            })}
            onClick={onClick}
        >
            <img src={`/img/${isAdded ? 'bookmark.svg' : 'like.svg'}`} alt="" />
            {isAdded ? 'В избранном' : 'В избранное'}
        </span>
    );
}

export default AddToFavorites;
