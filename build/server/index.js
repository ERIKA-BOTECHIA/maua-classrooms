"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./models/server");
const server = new server_1.Server();
const run1 = () => {
    server.listen();
};
const runner = () => {
    run1();
};
runner();
//# sourceMappingURL=index.js.map