import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../../data/fetchRequest";
import getUrl from "../../data/api";

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
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </>
  );
}

export default Products;
