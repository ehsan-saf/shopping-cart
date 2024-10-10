import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CLOSE_ICON } from "../assets/icons/svg";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../contexts/cartContext";
import NumberInput from "./tools/NumberInput";

function Item({ info }) {
  return (
    <ItemContainer>
      <div>
        <h3>{info.title}</h3>
        <NumberInput productId={info.id} />
      </div>
      <img src={info.image} alt={info.title} />
    </ItemContainer>
  );
}

Item.propTypes = {
  info: PropTypes.object,
};

function QuickView({ open, onToggle }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <>
      <Container open={open}>
        <CloseContainer>
          <CloseButton onClick={onToggle}>{CLOSE_ICON}</CloseButton>
        </CloseContainer>
        <List>
          {cartItems.map((item) => (
            <Item key={item.id} info={item} />
          ))}
        </List>
        <CheckoutButton>Go to checkout</CheckoutButton>
      </Container>
    </>
  );
}

export default QuickView;

QuickView.propTypes = {
  open: PropTypes.bool,
  onToggle: PropTypes.func,
};

const Background = styled.div`
  display: ${(el) => (el.open ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100svw;
  height: 100svh;
  opacity: 0.9;
  background-color: ${COLORS.Modal_Bg};
  filter: blur(10px);
`;

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;

  width: 300px;
  max-width: 350px;

  height: calc(100svh - 50px);

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  border-radius: 10px 0 0 10px;

  padding: 10px;

  transform: translateX(${(el) => (el.open ? "0%" : "100%")});

  transition: 0.5s transform;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    fill: red;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  padding: 10px 5px;

  & h3 {
    font-size: 0.84rem;
  }

  & img {
    max-width: 50px;
    height: auto;
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${COLORS.Bottom_Border};
  }
`;

const CheckoutButton = styled.button`
  margin-top: auto;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;

  color: hsl(0, 0%, 99%);
  background-color: ${COLORS.Default_Button};

  &:hover {
    background-color: ${COLORS.Default_Button_Hover};
  }
`;
