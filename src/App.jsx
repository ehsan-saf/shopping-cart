import { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import QuickView from "./components/QuickView";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleQuickView() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <QuickView isOpen={isOpen} onToggle={toggleQuickView} />
      <Header onToggle={toggleQuickView} />
      <Outlet />
    </>
  );
}

export default App;
