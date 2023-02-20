"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = (0, express_1.default)();
        app.get("/", (req, resp) => {
            resp.send("Test ....");
        });
        app.listen(7777, () => {
            console.log("server started");
        });
    }
}
exports.default = Server;
