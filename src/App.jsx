import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import QuickView from "./components/popups/QuickView";
import CartContext from "./contexts/cartContext";
import AlertContext from "./contexts/AlertContext";
import Alert from "./components/popups/Alert";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const closeQuickview = function (e) {
      console.log(e);
      if (e.target.id === "page-bg") {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeQuickview);

    return () => {
      document.body.removeEventListener("click", closeQuickview);
    };
  }, []);

  function toggleQuickView() {
    setIsOpen(!isOpen);
  }
  return (
    <AlertContext.Provider value={{ alerts, setAlerts }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Container>
          <QuickView open={isOpen} onToggle={toggleQuickView} />
          <Header onToggle={toggleQuickView} />
          <Outlet />
          <AlertsList>
            {alerts.map((item) => (
              <Alert text={item.message} key={item.id} />
            ))}
          </AlertsList>
        </Container>
      </CartContext.Provider>
    </AlertContext.Provider>
  );
}

export default App;

const Container = styled.div`
  padding: 10px 30px;
`;

const AlertsList = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
