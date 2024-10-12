import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

Alert.propTypes = {
  text: PropTypes.string,
};

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
  right: 0;
  left: 0;
  bottom: 30px;
  margin: 0 auto;
  width: 170px;
  height: 50px;
  display: grid;
  place-content: center;
  place-items: center;

  border-radius: 10px;
  color: hsl(0, 0%, 96%);
  background-color: #10b981;

  opacity: 0;
  transform: translateY(15px);

  animation: fade-in 0.4s 1 forwards;

  @keyframes fade-in {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
