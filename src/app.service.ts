import { Inject, Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import * as shareEntity from 'share-entity'

// import { UserEntity } from 'share-entity';
// import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  // constructor(
  //   @InjectRepository(shareEntity.UserEntity, 'share')
  //   private readonly userRepository: Repository<shareEntity.UserEntity>,
  // ) { }
  async getHello(res) {
    // const data = await this.userRepository.find({
    //   where: { user_id: "5939" }
    // })
    // return data
    console.log(1);

  }
}
