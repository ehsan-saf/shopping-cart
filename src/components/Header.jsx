import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CART_ICON } from "../assets/icons/svg";
import PropTypes from "prop-types";

function Header({ onToggle }) {
  return (
    <Container>
      <Nav>
        <Logo>Neo</Logo>
        <Group>
          <Item>Home</Item>
          <Item>Products</Item>
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
  padding: 10px;

  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.Nav_Item_Hover};
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
