import { css } from "@emotion/react"

const navigationStyles = css`
width: 90%;
max-width: var(--page-width);
color: var(--text-color);
margin:  -17px auto;
top: -1em;
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

`

export { navigationStyles }