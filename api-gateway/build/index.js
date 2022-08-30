"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const process_1 = __importDefault(require("process"));
const cluster_1 = __importDefault(require("cluster"));
const app_1 = require("./src/app");
const numCPUs = (0, os_1.cpus)().length;
const PORT = process_1.default.env.PORT || 3000;
if (cluster_1.default.isMaster) {
    console.log(`Primary ${process_1.default.pid} is running`);
    /* Fork workers. */
    for (let i = 0; i < numCPUs; i++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}
/* Start app to specific PORT & establish database connection */
else {
    app_1.app.listen(PORT, () => {
        console.log(`API Gateway running at http://localhost:${PORT}`);
    });
}
