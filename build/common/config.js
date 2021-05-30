"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_MODE = exports.JWT_SECRET_KEY = exports.MONGO_CONNECTION_STRING = exports.NODE_ENV = exports.PORT = void 0;
const path = __importStar(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const { PORT } = process.env;
exports.PORT = PORT;
const { NODE_ENV } = process.env;
exports.NODE_ENV = NODE_ENV;
const { MONGO_CONNECTION_STRING } = process.env;
exports.MONGO_CONNECTION_STRING = MONGO_CONNECTION_STRING;
const { JWT_SECRET_KEY } = process.env;
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
const { AUTH_MODE } = process.env;
exports.AUTH_MODE = AUTH_MODE;
dotenv_1.default.config({
    path: path.join(__dirname, '../../.env')
});