"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const CONFIG = {
    APP: {
        HOST: process.env.APP_HOST,
        BASE_URL: process.env.API_BASE_URL,
        PORT: process.env.NODE_ENV === "test" ? 8888 : process.env.PORT || 8080,
        ENV: process.env.NODE_ENV,
    },
    SERVER: {
        TIMEOUT: 60000, // 1m
    },
    LOG: {
        PATH: process.env.LOGGING_DIR || "logs",
        LEVEL: process.env.LOGGING_LEVEL || "info",
        MAX_FILES: process.env.LOGGING_MAX_FILES || 5,
    },
    AUTH: {
        SALT_ROUNDS: process.env.SALT_ROUNDS || "11",
        ACCESS_TOKEN_EXPIRE: process.env.ACCESS_TOKEN_DURATION || "300000",
        REFRESH_TOKEN_EXPIRE: process.env.REFRESH_TOKEN_DURATION || "86400000",
        ACCESS_TOKEN_SALT: process.env.ACCESS_TOKEN_SALT,
        REFRESH_TOKEN_SALT: process.env.REFRESH_TOKEN_SALT,
    },
    AWS: {
        ACCESS_KEY: process.env.AWS_ACCESS_KEY,
        SECRET_KEY: process.env.AWS_SECRET_KEY,
        REGION: process.env.AWS_REGION,
        S3: {
            PATH: process.env.S3_BUCKET_PATH,
            BUCKET_NAME: process.env.S3_BUCKET_NAME,
        },
        COGNITO: {
            USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
            CLIENT_ID: process.env.COGNITO_CLIENT_ID,
        },
    },
    EXTERNAL: {
        API_KEY: process.env.API_KEY,
    },
};
exports.default = CONFIG;
