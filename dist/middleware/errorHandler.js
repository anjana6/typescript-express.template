"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (error, req, res, next) => {
    return res.status(500).json('Internal server error');
};
exports.default = errorHandler;
