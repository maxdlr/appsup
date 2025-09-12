import { Student } from '@/entity/Student';
import { AppDataSource } from '@/services/database/datasource';

export const studentRepository = AppDataSource.getRepository(Student);

// export const StudentRepository = AppDataSource.getRepository(Student).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("student")
//             .where("student.firstName = :firstName", { firstName })
//             .andWhere("student.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })
