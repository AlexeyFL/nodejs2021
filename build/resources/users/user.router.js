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
const uuid_1 = require("uuid");
const express_1 = require("express");
const user_model_1 = __importDefault(require("./user.model"));
const usersService = __importStar(require("./user.service"));
const router = express_1.Router();
// get all users
router.route('/').get(async (res) => {
    const users = await usersService.getAllUsers();
    res.json(users.map(user_model_1.default.toResponse));
});
// get user by id
router.route('/:id').get(async (req, res) => {
    const userId = req.params.id;
    const user = await usersService.getUser(userId);
    res.status(user ? 200 : 404).json(user_model_1.default.toResponse(user));
});
// update user by id
router.route('/:id').put(async (req, res) => {
    const { body } = req;
    const userId = req.params.id;
    const newUserBody = await usersService.updateUser({
        ...body,
        id: userId,
    });
    res.json(user_model_1.default.toResponse(newUserBody));
});
// create new user
router.route('/').post(async (req, res) => {
    const newUser = new user_model_1.default({
        id: uuid_1.v4(),
        name: req.query.name,
        login: req.query.login,
        password: req.query.password,
    });
    usersService.addUser(newUser);
    res.status(201).json(newUser.getUser());
});
// delete user
router.route('/:id').delete(async (req, res) => {
    const userId = req.params.id;
    await usersService.deleteUser(userId);
    res.status(204).json(null);
});
exports.default = router;
