export enum ProductCategory {
  SOFA = 'SOFA',
  CHAIR = 'CHAIR',
  MUG = 'MUG',
  POT = 'POT',
  BED_SET = 'BED_SET',
}

export type NewProduct = {
  category: ProductCategory
  image: string
  title: string
  description: string
  price: number
  isNew: boolean
  discount: boolean
  previousPrice: number
  outOfStock: boolean
}

export interface IChange {
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  of: keyof NewProduct
  isCheckbox?: boolean
}
