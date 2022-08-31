
import { IRoutes } from "../types"

export const ROUTES: IRoutes[] = [
    {
        url: "/auth",
        proxy: {
            target: "http://localhost:5001/",
            changeOrigin: true,
            pathRewrite: {
                [`^/auth`]: '',
            }
        }
    },
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