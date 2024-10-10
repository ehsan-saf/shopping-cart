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
      <Number
        onChange={(e) => updateQuantity(parseInt(e.target.value))}
        value={product.quantity}
        type="number"
      ></Number>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Plus onClick={handlePlus}>{Plus_Icon}</Plus>
        <Minus onClick={handleMinus}>{Minus_Icon}</Minus>
      </div>
    </Container>
  );
}

export default NumberInput;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 7px;
`;

const Number = styled.input`
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & {
    appearance: textfield;
  }

  width: 40px;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid hsl(0 0% 70%);
  text-align: center;
`;

const Minus = styled.button`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: white;
  border-radius: 0 0 5px 5px;
  border: none;

  background-color: #e11d48;

  & svg {
    width: 100px;
    fill: white;
  }
`;

const Plus = styled(Minus)`
  border-radius: 5px 5px 0 0;
  background-color: #059669;
`;
