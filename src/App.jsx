import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import QuickView from "./components/popups/QuickView";
import CartContext from "./contexts/cartContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function toggleQuickView() {
    setIsOpen(!isOpen);
  }
  return (
    <Container>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <QuickView open={isOpen} onToggle={toggleQuickView} />
        <Header onToggle={toggleQuickView} />
        <Outlet />
      </CartContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 10px 30px;
`;
