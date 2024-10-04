import { Link, useParams } from "react-router-dom";

function Products() {
  const { category } = useParams();

  return (
    <>
      <h1>Products Page, Category: {category}</h1>
      <Link to={"/"}>Go back to home</Link>
    </>
  );
}

export default Products;
