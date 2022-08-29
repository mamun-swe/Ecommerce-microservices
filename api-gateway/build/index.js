"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const logging_middleware_1 = require("./src/middleware/logging.middleware");
const proxy_middleware_1 = require("./src/middleware/proxy.middleware");
const authenticate_middleware_1 = require("./src/middleware/authenticate.middleware");
const routes_1 = require("./src/routes");
exports.app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
(0, logging_middleware_1.setupLogging)(exports.app);
(0, proxy_middleware_1.setupProxies)(exports.app, routes_1.ROUTES);
(0, authenticate_middleware_1.setupAuthentication)(exports.app, routes_1.ROUTES);
/* Root route */
exports.app.get("/", (req, res, next) => {
    const services = [];
    for (let i = 0; i < routes_1.ROUTES.length; i++) {
        services.push({
            service: req.protocol + "://" + req.get('Host') + routes_1.ROUTES[i].url,
            authentication: routes_1.ROUTES[i].auth
        });
    }
    res.status(200).json({
        message: "Welcome to API gateway.",
        services
    });
});
/* Handelling 404 route */
exports.app.use((req, res, next) => {
    res.status(404).json({
        status: false,
        errors: {
            message: "Sorry, service not found."
        }
    });
});
/* Start app to specific PORT */
exports.app.listen(PORT, () => {
    console.log(`API Gateway running at http://localhost:${PORT}`);
});
