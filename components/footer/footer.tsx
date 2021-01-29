import { IoLogoGithub as Github } from "react-icons/io"
import { FiTwitter as Twiter } from "react-icons/fi"
import { leakedList } from '@shared/reusable-styles';
import { footer } from './styles';
import Footprint from './../Footprint/index';


const Footer = () => {
  return (
    <footer css={footer}>
      <ul css={leakedList}>
        <li>
            <a aria-label="My git"><Github /> </a>
        </li>
        <li>
        <a aria-label="My Twitter" ><Twiter /></a>
        </li>
      </ul>
        <a aria-label="Copyright" ><Footprint /></a>
    </footer>
  );
};

export default Footer