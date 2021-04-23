import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuid} from "uuid";

@Entity("connections")
class Connection {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    socket_id: string;
    
    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user: string

    @Column()
    user_id: string;

    @Column()
    created_at: string;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Connection }