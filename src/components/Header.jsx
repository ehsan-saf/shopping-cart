import styled from "styled-components";
import { COLORS } from "../Constants/colors";

function Header() {
  return (
    <Container>
      <Nav>
        <Logo></Logo>
        <Group>
          <Item>Home</Item>
          <Item>Products</Item>
          <Item></Item>
        </Group>
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: sticky;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1``;

const Group = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  padding: 10px;

  border-radius: 5px;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${COLORS.Nav_Item_Hover};
  }
`;
