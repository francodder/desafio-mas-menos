"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.myRoutes = {
            masMenos: '/api/masMenos'
        };
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.myRoutes.masMenos, require('../routes/mas-menos.router'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando en el puerto', this.port);
        });
    }
}
exports.default = Server;
