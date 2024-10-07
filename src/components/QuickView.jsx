import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CLOSE_ICON } from "../assets/icons/svg";
import PropTypes from "prop-types";

function QuickView({ isOpen, onToggle }) {
  return (
    <>
      <Container isOpen={isOpen}>
        <CloseContainer>
          <CloseButton onClick={onToggle}>{CLOSE_ICON}</CloseButton>
        </CloseContainer>
        <CheckoutButton>Go to checkout</CheckoutButton>
      </Container>
    </>
  );
}

export default QuickView;

QuickView.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

const Background = styled.div`
  display: ${(el) => (el.isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100svw;
  height: 100svh;
  opacity: 0.9;
  background-color: ${COLORS.Modal_Bg};
  filter: blur(10px);
`;

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;

  width: 300px;
  max-width: 350px;

  height: calc(100svh - 50px);

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  border-radius: 10px 0 0 10px;

  padding: 10px;

  transform: translateX(${(el) => (el.isOpen ? "0%" : "100%")});

  transition: 0.5s transform;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    fill: red;
  }
`;

const CheckoutButton = styled.button`
  margin-top: auto;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;

  color: hsl(0, 0%, 99%);
  background-color: ${COLORS.Default_Button};

  &:hover {
    background-color: ${COLORS.Default_Button_Hover};
  }
`;
