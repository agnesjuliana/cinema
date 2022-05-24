import { MovieSchedules } from "src/modules/movie-schedules/entities/movie_schedules.entity";
import { MovieTags } from "src/modules/movies-tags/entities/movie_tags.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  overview: string;

  @Column()
  poster: string;

  @Column()
  play_until: Date;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date

  @OneToMany(type=>MovieTags, movieTags=>movieTags.movie_id)
  movie_tags: MovieTags[]

  @OneToMany(type=>MovieSchedules, movieSchedules=>movieSchedules.movie_id)
  movie_schedules: MovieSchedules[]
}