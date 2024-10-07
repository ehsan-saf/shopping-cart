import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { COLORS } from "../../Constants/colors";

function ProductPage() {
  const { id } = useParams();
  const location = useLocation();

  const data = location.state;

  return (
    <Container>
      <Info>
        <h3>{data.title}</h3>
        <p>$ {data.price}</p>
        <AddButton>Add to cart</AddButton>
      </Info>
      <Image src={data.image} alt={data.title} />
    </Container>
  );
}

export default ProductPage;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    max-width: 300px;
    font-size: 1.1rem;
  }
`;

const Image = styled.img`
  max-width: 250px;
  height: auto;
`;

const AddButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;

  color: white;
  background: ${COLORS.Default_Button};

  font-size: 1.3rem;

  &:hover {
    background: ${COLORS.Default_Button_Hover};
  }
`;
