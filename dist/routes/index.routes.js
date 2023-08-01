"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const post_routes_1 = __importDefault(require("./post.routes"));
const ApiRoute = (0, express_1.Router)();
ApiRoute.use('/user', user_routes_1.default);
ApiRoute.use('/post', post_routes_1.default);
exports.default = ApiRoute;
