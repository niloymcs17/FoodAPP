import { ImageSourcePropType } from "react-native/types";

export interface Item {
    "id": string,
    "price": string,
    "label": string,
    "type": string,
    "image": ImageSourcePropType,
    "showItem": boolean,
    "itemUnavailable": boolean,
    "catagory": string
}
