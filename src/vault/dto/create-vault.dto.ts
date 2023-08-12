import { IsArray } from 'class-validator'
import { VaultItem } from '../entities/vault.entity'

export class CreateVaultDto {
  @IsArray()
  items: VaultItem[]
}
