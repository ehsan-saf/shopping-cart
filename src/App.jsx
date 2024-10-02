import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import QuickView from "./components/QuickView";
import Main from "./components/Main";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleQuickView() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <QuickView isOpen={isOpen} onToggle={toggleQuickView} />
      <Header onToggle={toggleQuickView} />
      <Main />
    </>
  );
}

export default App;
