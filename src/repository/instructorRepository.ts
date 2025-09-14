import { Instructor } from '@/entity/Instructor';
import { AppDataSource } from '@/services/database/datasource';

export const instructorRepository = AppDataSource.getRepository(Instructor);

// export const InstructorRepository = AppDataSource.getRepository(Instructor).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("instructor")
//             .where("instructor.firstName = :firstName", { firstName })
//             .andWhere("instructor.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })
