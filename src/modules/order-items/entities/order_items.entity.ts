import { MovieSchedules } from "src/modules/movie-schedules/entities/movie_schedules.entity";
import { Orders } from "src/modules/orders/entities/orders.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from "typeorm";

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Orders, orders => orders.id)
  order_id: Orders;

  @ManyToOne(type => MovieSchedules, movieSchedules => movieSchedules.id)
  movie_schedule_id: MovieSchedules;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  sub_total_price: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date
}