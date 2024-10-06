import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CART_ICON } from "../assets/icons/svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ onToggle }) {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link>Neo</Link>
        </Logo>
        <Group>
          <Item>
            <Link to={"/"}>Home</Link>
          </Item>
          <Item>
            <Link to={"/"}>Products</Link>
          </Item>
          <Item onClick={onToggle}>
            <CartButton>{CART_ICON}</CartButton>
          </Item>
        </Group>
      </Nav>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  onToggle: PropTypes.func,
};

const Container = styled.header`
  position: sticky;
  max-width: 850px;
  margin: 0 auto 40px;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 15px;
  border: 1px solid ${COLORS.Nav_Border};
  border-radius: 30px;

  user-select: none;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const Group = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

const Item = styled.li`
  border-radius: 5px;
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.Nav_Item_Hover};
  }

  & a {
    display: block;
    padding: 10px;
  }
`;

const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
`;
