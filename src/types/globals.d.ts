
declare type townType = {
  id?: number
  name: string
  description: string | null
}

declare type cityType = {
  id?: number
  name: string
  description: string | null
  towns?: townType[]
}

declare type provinceType = {
  id?: number
  name: string
  description: string | null
  cities?: cityType[]
}

