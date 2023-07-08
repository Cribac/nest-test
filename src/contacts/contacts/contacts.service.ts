import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Contact } from '../contact.entity'
import { UpdateResult, DeleteResult } from 'typeorm'

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return await this.contactsRepository.find()
  }

  async create(contact: Contact): Promise<Contact> {
    console.log('Create contact', contact)
    return await this.contactsRepository.save(contact)
  }

  async update(contact: Contact): Promise<UpdateResult> {
    return await this.contactsRepository.update(contact.id, contact)
  }

  async delete(id: any): Promise<DeleteResult> {
    return await this.contactsRepository.delete(id)
  }
}
