import { MovieSchedules } from "src/modules/movie-schedules/entities/movie_schedules.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity()
export class Studios {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  studio_number:number;

  @Column()
  seat_capacity: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date

  @OneToMany(type=>MovieSchedules, movieSchedules=>movieSchedules.studio_id)
  movie_schedule: MovieSchedules[]
}