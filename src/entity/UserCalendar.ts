import { ChildEntity, OneToOne } from 'typeorm';
import { User } from './parent/User';
import { Calendar } from './parent/Calendar';

@ChildEntity()
export class UserCalendar extends Calendar {
  @OneToOne(() => User, (user) => user.calendar, { cascade: true })
  user!: User;

  public static CreateRequestKeys: string[] = ['user'];
  public static GetRequestKeys: string[] = ['id'];
  public static DeleteRequestKeys: string[] = ['id'];
}
