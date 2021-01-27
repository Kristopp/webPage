import Link from "next/link";
import { BiBulb as AboutNav } from "react-icons/bi";
import { navigationStyles } from "./styles";


export const Navigation = () => {
  return (
    <nav css={navigationStyles}>
      <Link href="/">
        <a aria-label="back to home">
          <AboutNav />
        </a>
      </Link>
      <Link href="/about">
          <a>about</a>
      </Link>
    </nav>
  );
};

export default Navigation;
