import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

const yellowStyle = css`
    color:rgb(255, 193, 7);
`

export const HeaderNav = styled.nav.attrs({
    className: 'bg-black-70 fixed w-100 top-0 z-1 h3 items-center justify-between flex-row',
})`
    display: flex;
    padding: 10px 15px;
    font-size: 20px;
    border-radius: 0;
    -webkit-appearance: none;
    border: 1px solid transparent;
`

export const HeaderLogoLink = styled(Link).attrs({
    className: 'f2 courier',
})`
    ${yellowStyle}
    
`

export const HeaderLogoIcon = styled.i.attrs({
    className: "fa fa-video-camera",
    ariaHidden: "true"
})``

export const LogOutContainer = styled.div`
    cursor: pointer;
    padding: 5rem;
`

export const LogInLink = styled(Link)`
    ${yellowStyle};
    padding: 5rem;
`