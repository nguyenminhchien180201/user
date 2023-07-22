import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CONFIG_POSTGRESQL_HOST_ALOLINE,
      port: parseInt(process.env.CONFIG_POSTGRESQL_PORT_ALOLINE),
      username: process.env.CONFIG_POSTGRESQL_USER_NAME_ALOLINE,
      password: process.env.CONFIG_POSTGRESQL_PASSWORD_ALOLINE,
      database: process.env.CONFIG_POSTGRESQL_KEYSPACE_ALOLINE,
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.CONFIG_POSTGRESQL_HOST_SHARED,
      port: parseInt(process.env.CONFIG_POSTGRESQL_PORT_SHARED),
      username: process.env.CONFIG_POSTGRESQL_USER_NAME_SHARED,
      password: process.env.CONFIG_POSTGRESQL_PASSWORD_SHARED,
      database: process.env.CONFIG_POSTGRESQL_KEYSPACE_SHARED,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [ConfigService]
})
export class ConfigModule { }
