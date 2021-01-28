import { css } from "@emotion/react";
import Image from "next/image";
import Page from "@layouts/page";

const header = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2ch;
`;
const titleName = css`
  color: #fff;
  margin-right: 3ch;
  font-weight: 200;
`;
const charPicture = css`
border-radius: 50%;
`
const bio = css`
  color: #fff;
  margin-top: 5ch;
  p {
    max-width: 60ch;
    margin: 0 auto;
  }
  //if there is pargraph before paragraf then to next
  > p + p {
    margin-top: 3ch;
  }
`;

const footer = css`
  margin-top: 5ch;
  margin-right: 5ch;
  text-align: center;
`;

const About = () => (
  <Page meta={{
    title: 'About :: Hello Devlog',
    description: 'Penguin'
  }}>
    <section css={header}>
      <Image css={charPicture} src="/Oswald_Cobblepot_Season_4.png" width={200} height={300} />
      <h2 css={titleName}>Penguin</h2>
    </section>
    <section css={bio}>
      <p >
        Oswald Chesterfield Cobblepot (born Oswald Chesterfield Kapelput), known
        as "Penguin" to most, was born to Gertrud Kapelput and Elijah Van Dahl
        but his mother cut off contact with his father before his birth, due to
        the dislike his father's parents had for his mother's relationship with
        their son. Oswald started out as a low level member of Gotham’s criminal
        Underworld, but through his cunning and manipulative skills, he
        eventually managed to take power and become the kingpin of Gotham. He
        lost his power after being driven underground by Theo Galavan and later
        was sent to Arkham where he was rehabilitated and reunited with his long
        lost father until his stepfamily killed him and abused Oswald to the
        point where he had a psychotic break and then killed them.
      </p>
    </section>
  </Page>
);

export default About;
