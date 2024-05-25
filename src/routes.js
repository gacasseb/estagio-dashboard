const API_URL = 'http://localhost:3010';

export const editTrap = '/armadilha/editar/:id';
export const createTrap = '/armadilha/cadastrar';
export const viewMetaData = '/armadilha/metadata/:id';

export const listTraps = API_URL + '/trap';
export const getTrap = API_URL + '/trap/:id'
export const createTrapRoute = API_URL + '/trap';
export const updateTrapRoute = API_URL + '/trap/:id'
export const importMetadataRoute = API_URL + '/trap/import/:id';
export const getMetaDataRoute = API_URL + '/trap/:id/metadata';
