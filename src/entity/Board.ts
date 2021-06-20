import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './Task';

export type IBoardColumn = {
  id: string | null;
  title: string;
  order: number;
};

@Entity({ name: 'board' })
export class Board {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 50, nullable: true })
  title?: string = 'Autotest board';

  @Column('varchar', { length: 50000 })
  columns: IBoardColumn[] = [
    { id: null, title: 'Backlog', order: 1 } as IBoardColumn,
    { id: null, title: 'Sprint', order: 2 } as IBoardColumn,
  ];

  @OneToMany(() => Task, (task: Task) => task.board)
  tasks!: Array<Task>;

  static toResponse(board: Board | undefined): Board | undefined {
    if (board !== undefined) {
      const { id, title, columns, tasks } = board;
      return { id, title, columns, tasks };
    }
    return undefined;
  }
}
