import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateVaultDto } from './dto/create-vault.dto'
// import { UpdateVaultDto } from './dto/update-vault.dto'
import { Vault, VaultDocument } from './entities/vault.schema'

@Injectable()
export class VaultService {
  constructor(
    @InjectModel(Vault.name) private vaultModel: Model<VaultDocument>,
  ) {}

  async create(createVaultDto: CreateVaultDto): Promise<VaultDocument> {
    const vault = new this.vaultModel(createVaultDto)
    return vault.save()
  }
}
