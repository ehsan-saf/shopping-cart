import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CART_ICON } from "../assets/icons/svg";

function Header() {
  return (
    <Container>
      <Nav>
        <Logo>Neo</Logo>
        <Group>
          <Item>Home</Item>
          <Item>Products</Item>
          <Item>
            <CartLink>{CART_ICON}</CartLink>
          </Item>
        </Group>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: sticky;
  max-width: 800px;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
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

const CartLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
