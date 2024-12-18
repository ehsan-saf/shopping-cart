import styled from "styled-components";
import { COLORS } from "../../Constants/colors";
import { CLOSE_ICON } from "../../assets/icons/svg";
import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import NumberInput from "../tools/NumberInput";
import { Link } from "react-router-dom";
import { calculateTotal } from "../../Utility/Price";
import ImageWrapper from "../tools/ImageWrapper";
import DeleteButton from "../tools/DeleteButton";

function Item({ info }) {
  return (
    <ItemContainer>
      <div>
        <h3>{info.title}</h3>
        <p style={{ marginTop: "10px" }}>
          Price: ${(info.price * info.quantity).toFixed(2)}
        </p>
        <NumberInput productId={info.id} />
        <DeleteButton id={info.id} />
      </div>
      <ImageWrapper
        width={60}
        height={60}
        customeStyle={{ margin: "auto 0 auto auto" }}
      >
        <img src={info.image} alt={info.title} />
      </ImageWrapper>
    </ItemContainer>
  );
}

Item.propTypes = {
  info: PropTypes.object,
};

function QuickView({ open, onToggle }) {
  const { cartItems } = useContext(CartContext);
  const totalPrice = calculateTotal(cartItems);

  return (
    <>
      <Container open={open} data-testid="quickview">
        <CloseContainer>
          <CloseButton onClick={onToggle}>{CLOSE_ICON}</CloseButton>
        </CloseContainer>
        <List>
          {cartItems.map((item) => (
            <Item key={item.id} info={item} />
          ))}
        </List>
        <Total>Total ${totalPrice}</Total>
        <CheckoutButton to={"shoppingcart"} onClick={onToggle}>
          Go to checkout
        </CheckoutButton>
      </Container>
      <Background open={open} id="page-bg" />
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
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100svw;
  height: 100svh;
  opacity: 0.8;
  background-color: ${COLORS.Modal_Bg};
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

  overflow-y: auto;
`;

const ItemContainer = styled.div`
  display: flex;
  padding: 10px 5px;

  & h3 {
    font-size: 0.84rem;
  }

  border-bottom: 1px solid ${COLORS.Bottom_Border};

  &:last-child {
    margin-bottom: 10px;
  }
`;

const Total = styled.div`
  margin: auto auto 10px;
  padding: 10px 15px;
  width: 85%;
  border: 1px solid hsl(0 0% 70%);
  border-radius: 20px 4px;
  text-align: center;
`;

const CheckoutButton = styled(Link)`
  text-decoration: none;
  text-align: center;

  padding: 10px 15px;
  border: none;
  border-radius: 15px;

  color: hsl(0, 0%, 99%);
  background-color: ${COLORS.Default_Button};

  &:hover {
    background-color: ${COLORS.Default_Button_Hover};
  }
`;
