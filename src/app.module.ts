import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigDbModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

// @Module({
//   imports: [ConfigModule, UserModule],
//   controllers: [AppController],
//   providers: [UserEntity, AppService],
// })
@Module({
  imports: [ConfigDbModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
