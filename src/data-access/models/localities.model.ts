export enum LocalityRegionEnum {
  COUNTRY = "isCountry",
  STATE = "isState",
  CITY = "isCity",
}

export interface LocalitiesInterface {
  name: string
  zipCode: string
  latitude: number
  longitude: number
  isCountry: boolean
  isState: boolean
  isCity: boolean
  children: LocalitiesInterface[]
}
