import styled from "styled-components";
import { COLORS } from "../Constants/colors";
import { CLOSE_ICON } from "../assets/icons/svg";
import PropTypes from "prop-types";

function QuickView({ isOpen, onToggle }) {
  return (
    <>
      <Background isOpen={isOpen} />
      <Position>
        <Container isOpen={isOpen}>
          <CloseContainer>
            <CloseButton onClick={onToggle}>{CLOSE_ICON}</CloseButton>
          </CloseContainer>
        </Container>
      </Position>
    </>
  );
}

export default QuickView;

QuickView.propTypes = {
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

const Position = styled.div`
  position: relative;
`;

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
  position: absolute;
  top: 0;
  right: 0;

  max-width: 300px;

  min-height: 300px;
  max-height: 600px;

  background-color: wheat;

  border: 1px solid red;
  border-radius: 4px 0 0 4px;

  transform: translateX(${(el) => (el.isOpen ? "0%" : "100%")});

  transition: 0.5s transform;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-items: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
`;
