import { markers } from "../mock/markers"

export const getTrap = async (id) => {
    // const response = await fetch(`https://api.traps.dev/traps/${id}`);
    // const trap = await response.json();
    // return trap;
    return markers.find((mark) => mark.id === +id);
}