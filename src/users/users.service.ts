import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument } from './entities/user.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(createUserDto)
    return user.save()
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find()
  }

  findOne(id: string) {
    return this.userModel.findById(id)
  }

  async findOneByEmail(email: string): Promise<UserDocument> {
    const user = this.userModel.findOne({ email }).lean()
    if (user) {
      return user
    }
    return null
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto)
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id)
  }
}
