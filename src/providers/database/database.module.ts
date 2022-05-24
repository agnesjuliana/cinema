import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/modules/users/entities/users.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  // password: 'root',
  database: 'cinema',
  // entities: ["dist/src/modules/**/entities/*.entity.js"],
  synchronize: false,
  migrations: [
    'dist/src/db/migrations/*.js'
  ],
  cli: {
    migrationsDir: 'src/db/migrations'
  },
}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config, 
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([Users])
  ]
})

export class DatabaseModule { }