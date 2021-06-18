import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Board } from './Board';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 50, nullable: true })
  title?: string = 'Autotest task';

  @Column('varchar', { length: 500 })
  order?: number = 0;

  @Column('varchar', { length: 500 })
  description?: string = 'Lorem ipsum';

  @Column('varchar', { length: 500, nullable: true })
  userId?: string | null = null;

  @ManyToOne(() => User, (user: User) => user.id)
  @JoinColumn()
  user?: User;

  @Column('varchar', { length: 500 })
  boardId?: string | null = null;

  @ManyToOne(() => Board, (board: Board) => board.id)
  @JoinColumn()
  board!: Board;

  @Column('varchar', { length: 500 })
  columnId?: string | null = null;

  static toResponse(task: Task | undefined): Task | undefined {
    if (task !== undefined) {
      const { id, title, order, description, userId, boardId, columnId, board } = task;
      return { id, title, order, description, userId, boardId, columnId, board };
    }
    return undefined;
  }
}
