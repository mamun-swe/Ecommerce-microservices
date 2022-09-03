import { IRoutes } from "../types";

export const ROUTES: IRoutes[] = [
  {
    name: "Auth",
    url: "/auth",
    proxy: {
      target: "http://localhost:5001/",
      changeOrigin: true,
      pathRewrite: {
        [`^/auth`]: "",
      },
    },
  },
  {
    name: "Shopping Cart",
    url: "/shopping-cart",
    proxy: {
      target: "http://localhost:5000/",
      changeOrigin: true,
      pathRewrite: {
        [`^/shopping-cart`]: "",
      },
    },
  },
];
