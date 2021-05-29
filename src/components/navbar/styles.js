import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: sticky;
  bottom: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.navBackgroundColor};
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavCustomLink = styled(NavLink)`
  color: ${(props) => props.theme.defaultColorNav};
  display: block;
  font-size: 10px;
  margin-top: 5px;

  .active {
    color: ${(props) => props.theme.activeColorNav};
  }
`;

export const Icon = styled.img`
  flex: 1;
`;
