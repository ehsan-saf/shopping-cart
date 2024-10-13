import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CartContext from "../contexts/cartContext";
import { COLORS } from "../Constants/colors";
import NumberInput from "./tools/NumberInput";
import { calculateTotal } from "../Utility/Price";

Item.propTypes = {
  info: PropTypes.object,
};

function Item({ info }) {
  return (
    <ItemContainer>
      <div>
        <h3>{info.title}</h3>
        <p style={{ marginTop: "10px" }}>
          Price: ${(info.price * info.quantity).toFixed(2)}
        </p>
        <NumberInput productId={info.id} />
      </div>
      <div
        style={{
          width: "100px",
          marginLeft: "auto",
          display: "grid",
          placeContent: "center",
        }}
      >
        <img src={info.image} alt={info.title} />
      </div>
    </ItemContainer>
  );
}

function ShoppingCart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const total = calculateTotal(cartItems);

  return (
    <Container>
      <List>
        {cartItems.map((item) => (
          <Item info={item} key={item.id} />
        ))}
      </List>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Total>Total: ${total}</Total>
        <PayButton>
          <span>Pay</span>
        </PayButton>
      </div>
    </Container>
  );
}

export default ShoppingCart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  max-width: 600px;
  margin: 0 auto;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ItemContainer = styled.div`
  display: flex;

  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  & h3 {
    font-size: 0.9rem;
  }
`;

const Total = styled.h3`
  display: flex;
  justify-content: center;

  border-radius: 8px;
  border: 2px solid ${COLORS.Default_Button};

  padding: 10px;
`;

const PayButton = styled.button`
  border-radius: 6px;
  border: none;
  padding: 5px;

  color: white;
  background-color: ${COLORS.Default_Button};

  font-size: 1.3rem;
`;