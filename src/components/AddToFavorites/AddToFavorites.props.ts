import { HTMLAttributes } from "react";

export interface AddToFavoriesProps extends HTMLAttributes<HTMLSpanElement> {
    id: string,
    isAdded: boolean,
    onAdd: (id: string) => void
}
