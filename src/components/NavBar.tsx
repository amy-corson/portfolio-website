import { Link } from 'react-router';
import { ROUTES } from '../util/route-constants';
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 100%;
    background-color: green;
`

const NavBar = () => {
    return <StyledNav>
    <Link to={ROUTES.home}>Home</Link>
      <Link to={ROUTES.projects}>Projects</Link>
    </StyledNav>
}

export default NavBar