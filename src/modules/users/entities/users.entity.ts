import { Orders } from "src/modules/orders/entities/orders.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  avatar: string;
  
  @Column()
  is_admin:string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date

  @OneToMany(type=>Orders, orders=>orders.user_id)
  orders: Orders[]
}