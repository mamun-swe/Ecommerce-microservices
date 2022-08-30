
import { IRoutes } from "../types"

export const ROUTES: IRoutes[] = [
    {
        url: "/shopping-cart",
        proxy: {
            target: "http://localhost:5000/",
            changeOrigin: true,
            pathRewrite: {
                [`^/shopping-cart`]: '',
            }
        }
    }
]