import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../../data/fetchRequest";
import getUrl from "../../data/api";
import PropTypes from "prop-types";

Product.propTypes = {
  info: PropTypes.object,
};

function Product({ info }) {
  return (
    <Item>
      <Image>
        <img src={info.image} alt={info.title} />
      </Image>
      <Info>
        <h3>{info.title}</h3>
      </Info>
    </Item>
  );
}

function Products() {
  const { category } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const URL = getUrl(category);

    const start = async () => {
      try {
        const productsArr = await fetchData(URL, controller.signal);

        console.log(productsArr[0]);
        setData(productsArr);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    start();

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Products Page, Category: {category}</h1>
      <Link to={"/"}>Go back to home</Link>
      {loading && <h2>Loading........</h2>}
      {error && <h2>There was an error</h2>}
      {data && (
        <Grid>
          {data.map((info) => {
            return <Product info={info} key={info.id} />;
          })}
        </Grid>
      )}
    </>
  );
}

export default Products;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  row-gap: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;

  & img {
    width: auto;
    height: 100%;
    margin: auto;
  }
`;

const Info = styled.div`
  display: flex;

  & h3 {
    font-size: 1rem;
  }
`;
