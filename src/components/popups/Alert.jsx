import { useEffect, useState } from "react";
import styled from "styled-components";

function Alert({ text }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return (
    <Container show={show}>
      <h3>{text}</h3>
    </Container>
  );
}

export default Alert;

const Container = styled.div`
  display: ${(p) => (p.show ? "block" : "none")};
  position: fixed;
  inset: 0;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  display: grid;
  place-content: center;
  place-items: center;

  border-radius: 30px;
  color: #fafafa;
  background-color: #00b63d;
`;
