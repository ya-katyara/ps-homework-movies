import { HTMLAttributes } from "react";

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
    onSearch: (value: string) => void
}
