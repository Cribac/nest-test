import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Vault, VaultSchema } from './entities/vault.schema'
import { VaultService } from './vault.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vault.name, schema: VaultSchema }]),
  ],
  providers: [VaultService],
  exports: [VaultService],
})
export class VaultModule {}
