import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import QuickView from "./components/QuickView";
import { func } from "prop-types";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleQuickView() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Header onToggle={toggleQuickView} />
      <QuickView isOpen={isOpen} onToggle={toggleQuickView} />
    </>
  );
}

export default App;
