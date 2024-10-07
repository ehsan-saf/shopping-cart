import App from "./App.jsx";
import Main from "./components/Main.jsx";
import Categories from "./components/subComponents/Categories.jsx";
import Products from "./components/subComponents/Products.jsx";
import ProductPage from "./components/subComponents/ProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Categories />,
          },
          {
            path: "products/:category",
            element: <Products />,
          },
          {
            path: "product/:id",
            element: <ProductPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
