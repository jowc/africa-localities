import { LocalityInterface } from "../models/localities.model";

export const localitiesStore: LocalityInterface[] = [
  {
    name: "nigeria",
    zipCode: "",
    latitude: 9.082,
    longitude: 8.6753,
    isCountry: true,
    isState: false,
    isCity: false,
    alias: [],
    children: [
      {
        name: "lagos",
        zipCode: "",
        latitude: 6.5244,
        longitude: 3.3792,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
      {
        name: "abuja",
        zipCode: "",
        latitude: 9.0579,
        longitude: 7.4951,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [
          {
            name: "gwarinpa",
            zipCode: "900108",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "wuse",
            zipCode: "900288",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "asokoro",
            zipCode: "900231",
            latitude: 9.1167,
            longitude: 7.4951,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "karu",
            zipCode: "900101",
            latitude: 8.9928,
            longitude: 7.5725,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "nyanya",
            zipCode: "900103",
            latitude: 9.0561,
            longitude: 7.5789,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "katampe",
            zipCode: "900108",
            latitude: 9.0984,
            longitude: 7.4716,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
          {
            name: "gwagwalada",
            zipCode: "900108",
            latitude: 8.9508,
            longitude: 7.0767,
            isCountry: false,
            isState: false,
            isCity: true,
            children: [],
            alias: [],
          },
        ],
        alias: [],
      },
      {
        name: "kano",
        zipCode: "",
        latitude: 12.0022,
        longitude: 8.592,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
      {
        name: "anambra",
        zipCode: "",
        latitude: 6.2209,
        longitude: 6.937,
        isCountry: false,
        isState: true,
        isCity: false,
        children: [],
        alias: [],
      },
      {
        name: "benue",
        zipCode: "970001",
        latitude: 7.7312634,
        longitude: 8.538425,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "abia",
        zipCode: "440221",
        latitude: 5.1128008, 
        longitude:  7.3651376,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "imo",
        zipCode: "460241",
        latitude: 5.489736, 
        longitude:  7.0341973,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "rivers",
        zipCode: "500001",
        latitude: 4.7676576, 
        longitude:  7.0188527,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "enugu",
        zipCode: "400102",
        latitude: 6.4499833, 
        longitude:  7.5000007,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "cross river",
        zipCode: "550101",
        latitude: 5.8671966, 
        longitude:  8.5204774,
        isCountry: false,
        isState: true,
        isCity: false,
        alias: [],
        children: [],
      },
      {
        name: "Akwa Ibom",
        zipCode: "520101",
        latitude: 4.990237,
        longitude: 7.9974399,
        isCountry:false,
        isState:true,
        isCity:false,
        alias:[],
        children:[]
      },
      {
        name: "delta",
        zipCode: "320110",
        latitude: 5.5273061,
        longitude: 6.1784167,
        isCountry:false,
        isState:true,
        isCity:false,
        alias:[],
        children:[]
      },
    ],
  },
];
