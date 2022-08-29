"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAuthentication = void 0;
const setupAuthentication = (app, routes) => {
    routes.forEach(route => {
        // app.use(route.url, createProxyMiddleware(route.proxy))
        if (route.auth) {
            app.use(route.url, function (req, res, next) {
                console.log("Authentication required.");
                next();
            });
        }
    });
};
exports.setupAuthentication = setupAuthentication;
