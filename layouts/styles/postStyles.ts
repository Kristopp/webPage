import { css } from "@emotion/react";

const postStyles = css`
  width: 100%;
  max-width: var(--reading-width);
  line-height: 1.5;
  margin: 0 auto;
  @media(max-width: 800px) { 
    padding: 0 2.5ch;
  }
`;

const postContainer = css`
  margin-top: 0 h1, h2, h3, h4, h5, h6 {
    color: var(--color-accent);
    margin-top: 2.5ch;
  }

  hr {
    margin: 5ch 0;
  }

  ul,
  ol {
    list-style: square;
    color: var(--color-accent);
    //li +li ensuures that second list item will have margin so we wont colapse two margins
    > li + li {
      margin-top: 1ch;
    }
  }

  a {
    color: black /* var(--color-text) */;
    text-decoration: underline dotted 2px var(--color-accent);
    :hover,
    :focus {
      color: var(--color-accent);
      text-decoration: none;
    }
  }
`;

export { postStyles, postContainer }