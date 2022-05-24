import { Module } from '@nestjs/common';
import { ConfigsModule } from './configs/configs.module';
import { MoviesModule } from './modules/movies/movies.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './providers/database/database.module';

@Module({
  imports: [
    UsersModule, 
    MoviesModule,
    DatabaseModule,
    ConfigsModule
  ]
})
export class AppModule {}
