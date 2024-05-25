import {
  getTrap as getTrapRoute,
  createTrapRoute,
  updateTrapRoute,
  listTraps,
  getMetaDataRoute,
} from "../routes";

export const getTrap = async (id) => {
  const response = await fetch(getTrapRoute.replace(":id", id));
  const trap = await response.json();
  return trap;
};

export const getTraps = async () => {
  const response = await fetch(listTraps);
  const traps = await response.json();
  return traps;
};

export const createTrap = async (trap) => {
  const response = await fetch(createTrapRoute, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trap),
  });
  return response.json();
};

export const updateTrap = async (id, trap) => {
  const response = await fetch(updateTrapRoute.replace(":id", id), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trap),
  });
  return response.json();
};

export const getMetaData = async (id) => {
  const response = await fetch(getMetaDataRoute.replace(":id", id));
  const metadata = await response.json();
  return metadata;
}
