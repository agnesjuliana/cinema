import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
// import configuration from "./configuration";

const configuration = () => ({
  port: process.env.PORT,
  host: process.env.HOST,
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST
  },
  basicAuth: {
    user: process.env.BASIC_AUTH_USERNAME,
    pass: process.env.BASIC_AUTH_PASSWORD
  },
  jwtKey: process.env.JWT_KEY,
})

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
  ]
})

export class ConfigsModule { }