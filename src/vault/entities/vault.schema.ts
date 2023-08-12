import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { VaultItem } from 'src/vault/entities/vault.entity'

export type VaultDocument = (Vault & Document) | null

@Schema({
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
export class Vault {
  @Prop({ required: true })
  items: VaultItem[]
}

export const VaultSchema = SchemaFactory.createForClass(Vault)
