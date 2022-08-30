"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
exports.ROUTES = [
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
];
