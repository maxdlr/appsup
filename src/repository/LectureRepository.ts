import { Lecture } from '@/entity/Lecture';
import { AppDataSource } from '@/services/database/datasource';

export const LectureRepository = AppDataSource.getRepository(Lecture);

// export const LectureRepository = AppDataSource.getRepository(Lecture).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("lecture")
//             .where("lecture.firstName = :firstName", { firstName })
//             .andWhere("lecture.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })
