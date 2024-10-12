import { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CartContext from "../contexts/cartContext";
import { COLORS } from "../Constants/colors";
import NumberInput from "./tools/NumberInput";

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

  return (
    <Container>
      <List>
        {cartItems.map((item) => (
          <Item info={item} key={item.id} />
        ))}
      </List>
    </Container>
  );
}

export default ShoppingCart;

const Container = styled.div``;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 500px;
  margin: 0 auto;
`;

const ItemContainer = styled.div`
  display: flex;

  padding: 10px 5px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  & h3 {
    font-size: 0.9rem;
  }
`;
