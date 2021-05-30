"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor({ id = uuid_1.v4(), name = 'TEST_USER', login = 'test_user', password = 'P@55w0rd', } = {}) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            login: this.login,
        };
    }
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
}
exports.default = User;
