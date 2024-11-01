import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetchData from "../../data/fetchRequest";
import getUrl from "../../data/api";
import Loading from "../popups/Loading";

Product.propTypes = {
  info: PropTypes.object,
};

function Product({ info }) {
  return (
    <Item to={`/product/id=${info.id}`} state={info}>
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(`State : ${loading}`);

  useEffect(() => {
    const controller = new AbortController();

    const URL = getUrl(category);

    const start = async () => {
      setLoading(true);

      try {
        const productsArr = await fetchData(URL, controller.signal);
        console.log(`useEffect : ${loading}`);
        console.log(productsArr[0]);

        setData(productsArr);
        setError(null);
        setLoading(false);
      } catch (err) {
        if (error.name !== "AbortError") {
          setError(err.message);
          setData(null);
          setLoading(false);
        }
      }
    };

    start();

    return () => controller.abort();
  }, [category]);

  return (
    <>
      <h1>Products Page, Category: {category}</h1>
      {loading && <Loading />}
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 250px));
  column-gap: 10px;
  row-gap: 10px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    max-width: 80%;
    margin: 0 auto;
  }
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: inherit;
  text-decoration: none;

  padding: 10px;
  border: 1px solid hsl(0 0% 94%);
  border-radius: 10px;
  background-color: white;

  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.04);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
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
