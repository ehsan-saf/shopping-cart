import styled from "styled-components";
import { useContext, useState } from "react";
import CartContext from "../../contexts/cartContext";
import { Delete_Icon } from "../../assets/icons/svg";

function DeleteButton({ id }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [clicked, setClicked] = useState(false);

  function DeleteItem() {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  }

  const Choices = (
    <div>
      <Confirm onClick={DeleteItem}>Delete</Confirm>
      <Cancel onClick={() => setClicked(false)}>Cancel</Cancel>
    </div>
  );
  return (
    <div>
      {!clicked ? (
        <DeleteBtn onClick={() => setClicked(true)}>{Delete_Icon}</DeleteBtn>
      ) : (
        Choices
      )}
    </div>
  );
}

export default DeleteButton;

const DeleteBtn = styled.button`
  background: none;
  border: none;

  & svg {
    fill: red;
  }
`;

const Confirm = styled.button`
  padding: 3px 5px;

  color: white;
  background-color: #475569;

  border: none;
  border-radius: 10px 0 0 10px;

  font-size: 0.7rem;

  text-align: center;
`;

const Cancel = styled(Confirm)`
  background-color: #059669;

  border-radius: 0 10px 10px 0;
`;
