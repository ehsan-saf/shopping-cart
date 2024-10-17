import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { COLORS } from "../../Constants/colors";
import CartContext from "../../contexts/cartContext";
import Alert from "../popups/Alert";

function ProductPage() {
  const location = useLocation();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [showAlert, setShowAlert] = useState(false);

  const data = location.state;

  function addToCart(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    let tempArr = [...cartItems];

    if (index >= 0) {
      tempArr[index].quantity += 1;
    } else {
      tempArr.push({ ...product, quantity: 1 });
    }

    setCartItems(tempArr);
  }

  function handleAdd(product) {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }

  return (
    <Container>
      <Info>
        <h3>{data.title}</h3>
        <p className="price">Price: $ {data.price}</p>
        <AddButton onClick={() => handleAdd(data)}>Add to cart</AddButton>
      </Info>
      <div style={{ width: "200px" }}>
        <Image src={data.image} alt={data.title} />
      </div>
      {showAlert &&
        createPortal(
          <Alert text={"added to cart"} />,
          document.getElementById("root")
        )}
    </Container>
  );
}

export default ProductPage;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 10px;

  & h3 {
    width: 250px;
    font-size: 1.1rem;
    align-self: stretch;
  }

  & .price {
    padding: 6px;
    border-radius: 6px;
    border: 2px solid hsl(0 0% 75%);
    text-align: center;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Image = styled.img``;

const AddButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;

  color: white;
  background: ${COLORS.Default_Button};

  font-size: 1.3rem;

  &:hover {
    background: ${COLORS.Default_Button_Hover};
  }
`;
