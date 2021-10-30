"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { sendResponse } = require('../routes/response');
const mas_menos_model_1 = __importDefault(require("../models/mas-menos.model"));
const masMenos = (req, res) => {
    try {
        let respond = false;
        const numbers = req.body;
        // Valida si el payload es un Array
        if (!Array.isArray(numbers)) {
            sendResponse(res, 400, false, 'Debe proveer un array con valores numéricos');
            return;
        }
        // Valida si los valores del array son numéricos
        numbers.forEach(x => {
            if (isNaN(x)) {
                sendResponse(res, 400, false, 'Solo se permiten valores numéricos');
                respond = true;
            }
        });
        if (respond)
            return;
        // Instancia la clase que procesa los números
        const masMenos = new mas_menos_model_1.default(numbers);
        const result = masMenos.getResult();
        sendResponse(res, 200, true, 'Acción completada', result);
    }
    catch (err) {
        sendResponse(res, 400, false, 'Debe proveer un array con valores numéricos');
    }
};
module.exports = {
    masMenos
};
