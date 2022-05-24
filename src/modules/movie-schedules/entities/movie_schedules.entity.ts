import { Movies } from "src/modules/movies/entities/movies.entity";
import { Studios } from "src/modules/studios/entities/studios.entity";
import {
  Column, Entity, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne
} from "typeorm";

@Entity()
export class MovieSchedules {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Movies, movies => movies.id)
  movie_id: Movies;

  @ManyToOne(type => Studios, studios => studios.id)
  studio_id: Studios;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  price: number;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date
}