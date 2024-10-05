import App from "./App.jsx";
import Main from "./components/Main.jsx";
import Categories from "./components/subComponents/Categories.jsx";
import Products from "./components/subComponents/Products.jsx";

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
        ],
      },
    ],
  },
];

export default routes;
