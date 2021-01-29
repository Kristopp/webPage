import { css } from "@emotion/react";

export const leakedList = css`
width: 90%;
max-width: var(--page-width);
color: var(--text-color);
margin:  0 auto;
top: -2em;
padding: 0.5em 0.5em;
position: relative;
display: flex;
justify-content: space-between;
border-radius: 3px;
font-size: 1.5rem;
background-color: var(--page-background);

a:hover,
a:focus { 
    color: var(--color-accent)
}
`;
