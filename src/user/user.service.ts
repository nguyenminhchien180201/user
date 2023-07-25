import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as shareEntity from 'share-entity'
import { CONNECT_DB_NAME } from 'src/ulits/enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(shareEntity.UserEntity, CONNECT_DB_NAME.SHARED)
    private readonly userRepository: Repository<shareEntity.UserEntity>,
  ) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {

    const data = await this.userRepository.find({ where: { user_id: '13' } })
    console.log("🚀 ~ data:", data)
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
