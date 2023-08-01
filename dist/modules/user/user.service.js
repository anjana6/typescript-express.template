"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUsers = void 0;
const ApplicationError_1 = require("../../utils/ApplicationError");
const fetchUsers = () => {
    const user = { name: 'anjana' };
    if (user) {
        throw new ApplicationError_1.ApplicationError('User not found', 400);
    }
    return user;
};
exports.fetchUsers = fetchUsers;
