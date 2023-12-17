import { HTMLAttributes } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'regular' | 'large'
}
