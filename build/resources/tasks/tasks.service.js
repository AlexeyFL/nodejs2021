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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.addTask = exports.getAllTasks = void 0;
const tasksRepo = __importStar(require("./tasks.memory.repository"));
const getAllTasks = () => tasksRepo.getAllTasks();
exports.getAllTasks = getAllTasks;
const addTask = (board) => tasksRepo.addTask(board);
exports.addTask = addTask;
const getTask = (id) => tasksRepo.getTask(id);
exports.getTask = getTask;
const updateTask = (board) => tasksRepo.updateTask(board);
exports.updateTask = updateTask;
const deleteTask = (id) => tasksRepo.deleteTask(id);
exports.deleteTask = deleteTask;
