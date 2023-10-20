import { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MoviesList.module.css';

const MOVIES = [
    {
        id: 1,
        title: 'The Big Bang Theory',
        img_url: '/posters/tbbt.jpg',
        isAdded: false,
        rating: 12
    },
    {
        id: 2,
        title: 'How I Met Your Mother',
        img_url: '/posters/himym.jpg',
        isAdded: false,
        rating: 123
    },
    {
        id: 3,
        title: 'Friends',
        img_url: '/posters/friends.jpg',
        isAdded: false,
        rating: 12
    },
    {
        id: 4,
        title: 'The Big Bang Theory',
        img_url: '/posters/tbbt.jpg',
        isAdded: false,
        rating: 12
    },
    {
        id: 5,
        title: 'How I Met Your Mother',
        img_url: '/posters/himym.jpg',
        isAdded: false,
        rating: 123
    },
    {
        id: 6,
        title: 'Friends',
        img_url: '/posters/friends.jpg',
        isAdded: false,
        rating: 12
    },
    {
        id: 7,
        title: 'The Big Bang Theory',
        img_url: '/posters/tbbt.jpg',
        isAdded: true,
        rating: 12
    },
    {
        id: 8,
        title: 'How I Met Your Mother',
        img_url: '/posters/himym.jpg',
        isAdded: false,
        rating: 123
    },
    {
        id: 9,
        title: 'Friends',
        img_url: '/posters/friends.jpg',
        isAdded: false,
        rating: 12
    },
    {
        id: 10,
        title: 'Friends',
        img_url: '/posters/friends.jpg',
        isAdded: false,
        rating: 12
    }
];

function MoviesList() {
    const [movies, setMovies] = useState(MOVIES);

    const onAddToFavorites = (id) => {
        setMovies(oldState => {
            return oldState.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isAdded: !item.isAdded
                    };
                } else {
                    return item;
                }
            });
        });
    };

    return (
        <div className={styles['movies-list']}>
            {movies.map(({ id, title, img_url, isAdded, rating }) => (
                <MovieCard
                    key={id}
                    id={id}
                    title={title}
                    img={img_url}
                    isAdded={isAdded}
                    rating={rating}
                    onAddToFavorites={onAddToFavorites}
                />
            ))}
        </div>
    );
}

export default MoviesList;