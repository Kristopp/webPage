import { container, title, postTitle } from "./styles";
import Logo from "@components/logos";

type HeaderProps = { 
  pageTitle?: string
}

const InternalTitle = ({ pageTitle }: { pageTitle : string} ) => { 
  <h1 css={postTitle}>{pageTitle}</h1>
}

const Header = ({ pageTitle }: HeaderProps) => (
  <header css={container}>
    <h1 css={title}><Logo />
    </h1>
  </header>
);

export default Header;
