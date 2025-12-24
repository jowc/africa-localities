import { FetchedSuccessfully } from "@utils/reponse-text.utils.js";
import { LocalityInterface } from "../models/localities.model.js";
import { localitiesStore } from "../store/localities.store.js";
import { ServerResponse } from "@utils/localities.utils.js";

export const getAllLocalities = () => {
  const sortByName = (a: LocalityInterface, b: LocalityInterface) =>
    a.name.localeCompare(b.name);

  const sortLocalities = (
    localities: LocalityInterface[],
  ): LocalityInterface[] =>
    localities.map((locality) => ({
      ...locality,
      children: locality.children
        ? sortLocalities(locality.children.sort(sortByName))
        : [],
    }));

  const sortedLocalities: LocalityInterface[] = sortLocalities(
    localitiesStore.sort(sortByName),
  );

  return ServerResponse(200, sortedLocalities, FetchedSuccessfully);
};

// Recursively search the localities tree for a matching name or alias
const findLocality = (
  nodes: LocalityInterface[],
  query: string,
): LocalityInterface | null => {
  for (const node of nodes) {
    const nameMatch = node.name.toLowerCase() === query;
    const aliasMatch =
      Array.isArray(node.alias) &&
      node.alias.some((a) => a.toLowerCase() === query);

    if (nameMatch || aliasMatch) return node;

    if (node.children && node.children.length) {
      const child = findLocality(node.children, query);
      if (child) return child; // return the exact child match
    }
  }
  return null;
};

export const getLocality = (name: string) => {
  const query = name.trim().toLowerCase();
  const all = getAllLocalities().data as LocalityInterface[];

  const match = findLocality(all, query);

  if (!match) {
    return ServerResponse(404, [], FetchedSuccessfully);
  }

  // Return the exact matched node (parent or child) with its own children as-is
  return ServerResponse(200, match, FetchedSuccessfully);
};
