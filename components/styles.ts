import { css } from "@emotion/react";

const container = css`
  background-color: var(--background-accent);
   min-height: 40vh; 
  padding: 0.5rem;
  display: grid;
`;

const title = css`
margin-left: 1ch;
`;

const postTitle = css`
font-size: 4,5rem;
text-align: center;
padding: 0 1ch;
color: var(--white);
`

export { container, title, postTitle };
