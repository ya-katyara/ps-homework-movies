import { HTMLAttributes } from "react";

export interface MovieCardProps extends HTMLAttributes<HTMLDivElement> {
    id: string,
    img: string,
    title: string,
    rating: number,
    isAdded: boolean,
    onAddToFavorites: (id: string) => void
}
