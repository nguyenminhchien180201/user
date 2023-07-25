import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as shareEntity from 'share-entity';
import { CONNECT_DB_NAME } from 'src/ulits/enum';


@Module({
  imports: [TypeOrmModule.forFeature([shareEntity.UserEntity], CONNECT_DB_NAME.SHARED)],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
