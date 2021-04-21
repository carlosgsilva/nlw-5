import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepository";


class UsersService {
    private userRepository: Repository<User>;

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }
    async create(email: string){
        //Verificar se o user existe
        const userExists = await this.userRepository.findOne({
            email,
        });

        //Se existir retorna o user
        if(userExists){
            return userExists;
        };

        const user = this.userRepository.create({
            email,
        });

        await this.userRepository.save(user);

        //Se não existir, salvar no DB
        return user;

    }
}

export { UsersService } 