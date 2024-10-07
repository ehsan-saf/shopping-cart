import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const location = useLocation();

  const data = location.state;

  return (
    <Container>
      <Info>
        <h3>{data.title}</h3>
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
`;

const Info = styled.div`
  display: flex;

  & h3 {
    max-width: 300px;
    font-size: 1.1rem;
  }
`;

const Image = styled.img`
  max-width: 250px;
  height: auto;
`;
