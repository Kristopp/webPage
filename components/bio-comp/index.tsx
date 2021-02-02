import Image from "next/image";
import { wrapper, profilePic, text } from "./styles"

const Bio = () => (
  <section css={wrapper}>
    <Image css={profilePic} src="/Oswald_Cobblepot_Season_4.png" width={225} height={300} />
    <p css={text}>
      Oswald Chesterfield Cobblepot (born Kapelput), also known as the Penguin,
      is the main antagonist of the DC comics TV series Gotham. He is the main
      antagonist of Season 1, a major antagonist in Season 2, one of the three
      secondary antagonists (alongside Barbara Kean and Kathryn Monroe) of
      Season 3, one of the two main antagonists (alongside Ra's al Ghul) of
      Season 4 and one of the three main antagonists (alongside Jeremiah Valeska
      and Nyssa al Ghul) of Season 5, as well as the secondary antagonist of the
      series finale. He is a notorious crime lord in Gotham City and the series'
      incarnation of the fearsome Batman villain known as the Penguin and acts
      as the re-imagined origin to the character, showcasing his rise to power
      prior to the Dark Knight's arrival. Throughout the series, he acts as the
      primary archenemy to protagonist Jim Gordon, as Gordon spends a majority
      of the series attempting to bring Penguin down, although occasionally they
      put their differences aside to deal with a much bigger threat. He was
      portrayed by Robin Lord Taylor, who also portrayed Julian Lambrick in
      Would You Rather.
    </p>
  </section>
);

export default Bio