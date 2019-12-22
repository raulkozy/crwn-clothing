import shopActionTypes from "./shop.types";

export const updateCollection = collectionsMap=> ({
    type: shopActionTypes.UDPATE_COLLECTIONS,
    payload: collectionsMap
})