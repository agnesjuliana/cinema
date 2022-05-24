import { OrderItems } from "src/modules/order-items/entities/order_items.entity";
import { Users } from "src/modules/users/entities/users.entity";
import {
  Column, Entity, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany
} from "typeorm";

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Users, users => users.id)
  user_id: Users;

  @Column()
  payment_method: 'cash' | 'debit';

  @Column()
  total_item_price: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date

  @OneToMany(type => OrderItems, ordersItem => ordersItem.order_id)
  order_items: OrderItems[]
}