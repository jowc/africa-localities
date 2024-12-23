import {FetchedSuccessfully} from "@utils/reponse-text.utils"
import {LocalityRegionEnum} from "../models/localities.model"
import {localitiesStore} from "../store/localities.store"
import {ServerResponse} from "@utils/localities.utils"

export const getAllLocalities = async () => {
  const localities = await localitiesStore
  return ServerResponse(200, localities, FetchedSuccessfully)
}

export const getLocality = async (name: string, region: LocalityRegionEnum) => {
  return await localitiesStore.find((locality) => {
    return locality.name === name && locality[region]
  })
}
