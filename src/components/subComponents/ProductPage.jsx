import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { COLORS } from "../../Constants/colors";
import { useContext, useState } from "react";
import CartContext from "../../contexts/cartContext";
import { createPortal } from "react-dom";
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
    }, 3000);
  }

  return (
    <Container>
      <Info>
        <h3>{data.title}</h3>
        <p>$ {data.price}</p>
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
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    max-width: 300px;
    font-size: 1.1rem;
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
