import styled from "styled-components";
import PropTypes from "prop-types";

import Man_Image from "../../assets/images/man-example.jpg";
import Woman_Image from "../../assets/images/woman-example.jpg";
import Accessory_Image from "../../assets/images/accessory-example.jpg";
import { FORWARD_ARROW_ICON } from "../../assets/icons/svg";
import { COLORS } from "../../Constants/colors";

import { Link } from "react-router-dom";

function Category({ category, image, title }) {
  return (
    <Link to={`/products/${category}`}>
      <SingleCategory>
        {FORWARD_ARROW_ICON}
        <Title>{title}</Title>
        <img src={image} alt="" />
      </SingleCategory>
    </Link>
  );
}

Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

function Categories() {
  return (
    <Container>
      <Category category={"men"} image={Man_Image} title={"men collection"} />
      <Category
        category={"women"}
        image={Woman_Image}
        title={"women collection"}
      />
      <Category
        category={"accessory"}
        image={Accessory_Image}
        title={"accessories"}
      />
    </Container>
  );
}

export default Categories;

const SingleCategory = styled.button`
  position: relative;

  background: none;
  border: none;

  width: fit-content;
  height: fit-content;

  cursor: pointer;

  & img {
    width: auto;
    height: 350px;

    border-radius: 10px;
    will-change: filter;
  }

  &:hover img {
    filter: blur(3px);
  }

  & svg {
    position: absolute;
    inset: 0;
    margin: auto;
    z-index: 1;

    width: 80px;
    height: 80px;
    fill: white;

    transform: translateX(-10px);

    opacity: 0;

    transition: 0.3s all;
  }

  &:hover svg {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Title = styled.div`
  position: absolute;
  z-index: 1;

  width: 97%;
  height: 25%;

  right: 0;
  left: 0;
  bottom: 0;

  margin: 0 auto;
  padding-top: 10px;

  border-radius: 10px;

  color: white;
  background-color: ${COLORS.Category_Title};

  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;

  transition: 0.3s all;

  opacity: 0;

  ${SingleCategory}:hover & {
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;