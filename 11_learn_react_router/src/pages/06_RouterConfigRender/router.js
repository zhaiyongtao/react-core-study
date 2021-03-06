import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import ProductMessage from "./pages/ProductMessage";

import Login from "./pages/Login";
import User from "./pages/User";

import NoMatch from "./pages/NoMatch";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/product",
    component: Product,
    routes: [
      {
        path: "/product",
        exact: true,
        component: ProductList,
      },
      {
        path: "/product/product-message",
        component: ProductMessage,
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/user/:userId",
    component: User,
  },
  {
    component: NoMatch,
  },
];

export default routes;
