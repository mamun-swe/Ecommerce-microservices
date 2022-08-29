"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupProxies = void 0;
const http_proxy_middleware_1 = require("http-proxy-middleware");
const setupProxies = (app, routes) => {
    routes.forEach(route => {
        app.use(route.url, (0, http_proxy_middleware_1.createProxyMiddleware)(route.proxy));
    });
};
exports.setupProxies = setupProxies;
