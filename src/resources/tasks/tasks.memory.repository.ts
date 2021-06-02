import Task from './tasks.model';
import * as database from '../../common/dataBase';

const getTasks = async (): Promise<Task[]> => database.getAllTasks();
const add = async (userData: Task): Promise<Task> => database.addTask(userData);
const getOneTask = async (id: string): Promise<Task | null> =>
  database.getUser(id);
const update = async (user: Task): Promise<Task> => database.updateTask(user);
const remove = async (id: string): Promise<void> => database.deleteTask(id);

export { getTasks, add, getOneTask, update, remove };
