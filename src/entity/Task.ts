import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';


@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 50, nullable: true })
  title?: string = 'Autotest task';

  @Column('int')
  order?: number = 0;

  @Column('varchar', { length: 500 })
  description?: string = 'Lorem ipsum';

  @Column('varchar', { nullable: true })
  userId?: string | null = null;

  @Column('varchar', { nullable: true })
  boardId?: string | null = null;

  @Column('varchar', { nullable: true })
  columnId?: string | null = null;

  static toResponse(task: Task | undefined): Task | undefined {
    if (task !== undefined) {
      const { id, title, order, description, userId, boardId, columnId } = task;
      return { id, title, order, description, userId, boardId, columnId };
    }
    return undefined;
  }
}
