export enum LocalityRegionEnum {
  COUNTRY = "isCountry",
  STATE = "isState",
  CITY = "isCity",
}

export interface LocalityInterface {
  name: string;
  zipCode: string; // empty string for country or state
  latitude: number;
  longitude: number;
  isCountry: boolean; // true if locality is country
  isState: boolean; // true if locality is state
  isCity: boolean; // true if locality is city
  alias: string[]; // other legal names for locality. e.g. FCT, Federal Capital Territory
  children: LocalityInterface[];
};
