export type VaultItem = {
  name: string
  item: string
}

export class Vault {
  items: VaultItem[]
  createdAt: Date
  updatedAt: Date
}
