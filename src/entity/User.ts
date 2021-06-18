import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from './Task';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('varchar', { length: 50, nullable: true })
  name?: string = 'TEST_USER';

  @Column('varchar', { length: 50 })
  login?: string = 'test_user';

  @Column('varchar', { length: 10 })
  password?: string = 'P@55w0rd';

  @OneToMany(() => Task, (task: Task) => task.user)
  tasks!: Array<Task>;

  static toResponse(user: User | undefined): User | undefined {
    if (user !== undefined) {
      const { id, name, login, tasks } = user;
      return { id, name, login, tasks };
    }
    return undefined;
  }
}
