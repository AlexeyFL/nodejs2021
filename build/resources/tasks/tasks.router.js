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
const tasks_model_1 = __importDefault(require("./tasks.model"));
const tasksService = __importStar(require("./tasks.service"));
const router = express_1.Router({ mergeParams: true });
// get all tasks
router.route('/').get(async (req, res) => {
    const tasks = await tasksService.getAllTasks();
    res.json(tasks.map(tasks_model_1.default.toResponse)).status(200);
});
// get task by id
router.route('/:id').get(async (req, res) => {
    const taskId = req.params.id;
    const task = await tasksService.getTask(taskId);
    if (task) {
        res.status(200).json(tasks_model_1.default.toResponse(task));
    }
    else {
        res.status(404).send([]);
    }
});
// update user by id
router.route('/:id').put(async (req, res) => {
    const { body } = req;
    const taskId = req.params.id;
    const newTaskBody = await tasksService.updateTask({
        ...body,
        id: taskId,
    });
    res.json(tasks_model_1.default.toResponse(newTaskBody));
});
// create new Task
router.route('/').post(async (req, res) => {
    const newTask = new tasks_model_1.default({
        id: uuid_1.v4(),
        title: req.query.title,
        order: req.query.order,
        description: req.query.description,
        userId: req.query.userId,
        boardId: req.params.boardId,
        columnId: req.query.columnId,
    });
    tasksService.addTask(newTask);
    res.status(201).json(newTask.getTask());
});
// delete task
router.route('/:id').delete(async (req, res) => {
    const taskId = req.params.id;
    await tasksService.deleteTask(taskId);
    res.status(204).json(null);
});
exports.default = router;
