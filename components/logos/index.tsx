import React from 'react'
import { css } from "@emotion/react"
import { TiGroupOutline as MainLogo} from "react-icons/ti";

const mainLogo = css`
position: relative;
color: var(--text-color);
top: 0.2em;
`
const logoStyle = css`
color: var(--text-color);
font-size: 2rem;
text-align: justify;
font-variant: small-caps;
`

const Logo = () => {
    return (
        <span css={logoStyle}>
                Hell<MainLogo css={mainLogo}/>
        </span>
            
    )
}

export default Logo
