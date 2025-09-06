import { User } from '@/entity/User';
import { AppDataSource } from '@/services/database/datasource';

export const userRepository = AppDataSource.getRepository(User);

// export const UserRepository = AppDataSource.getRepository(User).extend({
//     findByName(firstName: string, lastName: string) {
//         return this.createQueryBuilder("user")
//             .where("user.firstName = :firstName", { firstName })
//             .andWhere("user.lastName = :lastName", { lastName })
//             .getMany()
//     },
// })
