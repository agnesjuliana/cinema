import { MovieTags } from "src/modules/movies-tags/entities/movie_tags.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from "typeorm";

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  name:string;
  
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date

  @OneToMany(type=>MovieTags, movieTags=>movieTags.tag_id)
  movie_tags: MovieTags[] 
}