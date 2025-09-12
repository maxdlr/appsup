import { Teacher } from '@/entity/Teacher';
import { AppDataSource } from '@/services/database/datasource';

export const teacherRepository = AppDataSource.getRepository(Teacher);

// export const TeacherRepository = AppDataSource.getRepository(Teacher).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("teacher")
//             .where("teacher.firstName = :firstName", { firstName })
//             .andWhere("teacher.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })
