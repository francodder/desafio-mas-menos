"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, status, success, message, result) => {
    res.status(status).json({
        success,
        message,
        result
    });
};
const sendNotAllowed = (req, res) => {
    res.status(405).json({
        success: false,
        message: 'Este método no está permitido, pruebe con POST'
    });
};
module.exports = {
    sendResponse,
    sendNotAllowed
};
