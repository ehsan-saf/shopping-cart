import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../contexts/cartContext";
import PropTypes, { func } from "prop-types";
import { Minus_Icon, Plus_Icon } from "../../assets/icons/svg";

NumberInput.propTypes = {
  productId: PropTypes.number,
};

function NumberInput({ productId }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const index = cartItems.findIndex((item) => item.id === productId);
  const product = cartItems[index];

  function updateQuantity(newValue) {
    const newItems = [...cartItems];
    newItems[index].quantity = newValue;
    setCartItems(newItems);
  }

  function handleMinus() {
    const currQuantity = product.quantity;
    const newQuantity = currQuantity <= 2 ? 1 : currQuantity - 1;
    updateQuantity(newQuantity);
  }

  function handlePlus() {
    const currQuantity = product.quantity;
    const newQuantity = currQuantity + 1;
    updateQuantity(newQuantity);
  }

  return (
    <Container>
      <Minus onClick={handleMinus}>{Minus_Icon}</Minus>
      <Number>{product.quantity}</Number>
      <Plus onClick={handlePlus}>{Plus_Icon}</Plus>
    </Container>
  );
}

export default NumberInput;

const Container = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 7px;
`;

const Number = styled.div`
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid hsl(0 0% 70%);
`;

const Minus = styled.button`
  display: grid;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 0;
  background: white;
  border-radius: 10px;
  border: none;

  background-color: #e11d48;

  & svg {
    width: 100px;
    fill: white;
  }
`;

const Plus = styled(Minus)`
  background-color: #059669;
`;
