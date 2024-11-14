import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

Alert.propTypes = {
  text: PropTypes.string,
};

function Alert({ text }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container show={show}>
      <h3>{text}</h3>
    </Container>
  );
}

export default Alert;

const Container = styled.div`
  margin: 0 auto;
  width: 170px;
  height: 50px;
  display: grid;
  place-content: center;
  place-items: center;

  border-radius: 10px;
  color: hsl(0, 0%, 96%);
  background-color: #10b981;

  /* transform: translateY(${(p) => (p.show ? "5px" : "0")}); */

  animation: ${(p) => (p.show ? "fade-in" : "fade-out")} 0.4s 1 forwards;

  @keyframes fade-in {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-out {
    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
