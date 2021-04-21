import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"


class UsersService {
    async create(email: string){
        const userRepository = getCustomRepository(UserRepository);

        //Verificar se o user existe
        const userExists = await userRepository.findOne({
            email,
        });

        //Se existir retorna o user
        if(userExists){
            return userExists;
        };

        const user = userRepository.create({
            email,
        });

        await userRepository.save(user);

        //Se não existir, salvar no DB
        return user;

    }
}

export { UsersService } 