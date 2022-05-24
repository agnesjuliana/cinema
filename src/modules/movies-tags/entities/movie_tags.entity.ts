import { Movies } from "src/modules/movies/entities/movies.entity";
import { Tags } from "src/modules/tags/entities/tags.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from "typeorm";

@Entity()
export class MovieTags {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Movies, movies => movies.id)
  movie_id: Movies

  @OneToOne(type => Tags, tags => tags.id)
  tag_id: Tags

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date
}