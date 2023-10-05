import './AddToFavorites.css';

function AddToFavorites({id, isAdded, onAdd}) {
    const onClick = () => {
        onAdd?.(id);
    };

    return <span className={`add-to-favorites-btn${isAdded ? ' added' : ''}`} onClick={onClick}>
        <img src={`/img/${isAdded ? 'bookmark.svg' : 'like.svg'}`} alt="" />
        {isAdded ? 'В избранном' : 'В избранное'}
    </span>;
}

export default AddToFavorites;