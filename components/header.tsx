import { container, title } from "./styles";
import Logo from "@components/logos";

const Header = () => (
  <header css={container}>
    <h1 css={title}><Logo />
    </h1>
  </header>
);

export default Header;
